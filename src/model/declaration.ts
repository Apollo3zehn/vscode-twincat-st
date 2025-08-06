import { StSymbol, StSymbolKind } from "../core/types";
import { connectDeclaringSymbols } from "../core/utils";
import { MethodContext } from "../generated/StructuredTextParser";
import { StModelBuilder } from "./StModelBuilder";

export function findTypeDeclaration(symbol: StSymbol): StSymbol | undefined {

    for (const sourceFile of StModelBuilder.model.sourceFileMap.values()) {

        const globalObject = sourceFile.globalObjects.get(symbol.id);

        if (!globalObject)
            continue;

        if (!globalObject.references)
            globalObject.references = [];

        globalObject.references.push(symbol);
        
        return globalObject;
    }
}

export function findDeclaration(
    member: StSymbol,
    qualifier: StSymbol | undefined
) {

    // Find scope
    let scope: StSymbol | undefined;

    if (qualifier) {

        const declaration = qualifier.declaration;
        const declarationKind = declaration?.kind;

        const isType =
            declarationKind === StSymbolKind.Enum ||
            declarationKind === StSymbolKind.Gvl ||
            qualifier.id === "THIS";
        
        const isMethodOrFunction =
            declarationKind === StSymbolKind.Method ||
            declarationKind === StSymbolKind.Function;

        if (isType)
            scope = declaration;

        else if (isMethodOrFunction)
            scope = declaration?.returnTypeUsage?.type?.declaration;
        
        else
            scope = declaration?.typeUsage?.type?.declaration;
    }

    else {
        scope = member.parent;
    }

    // Find declaring symbol
    let declaration: StSymbol | undefined;

    declaration = member.id === "THIS"
        
        // THIS
        ? member.parent?.context instanceof MethodContext
            ? member.parent?.parent
            : member.parent
        
        // Everything else
        : resolveDeclaration(scope, member.id);

    if (declaration)
        connectDeclaringSymbols(member, declaration);
}

function resolveDeclaration(
    scope: StSymbol | undefined,
    id: string
): StSymbol | undefined {
    
    // Current scope or ancestor scopes
    while (scope) {

        // A test showed that TwinCAT resolves variables/properties first ...
        if (scope.variablesAndProperties) {

            const varOrPropDeclaration = scope.variablesAndProperties.get(id);

            if (varOrPropDeclaration)
                return varOrPropDeclaration;
        }

        // ... then methods
        if (scope.methods) {

            const methodDeclaration = scope.methods.get(id);

            if (methodDeclaration)
                return methodDeclaration;
        }
        
        scope = scope.parent;
    }

    // Global scope
    for (const sourceFile of StModelBuilder.model.sourceFileMap.values()) {
        
        const globalObject = sourceFile.globalObjects.get(id);

        if (globalObject)
            return globalObject;
    }

    return undefined;
};
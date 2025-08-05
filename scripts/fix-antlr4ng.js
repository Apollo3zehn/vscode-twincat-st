// Fixes antlr4ng so that it defaults to being a commonjs module
// Similar error here: https://github.com/mermaid-js/mermaid/issues/3747
const fs = require('fs');
const path = require('path');

const antlrPkgPath = path.join(__dirname, '..', 'node_modules', 'antlr4ng', 'package.json');

if (fs.existsSync(antlrPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(antlrPkgPath, 'utf8'));
    
    if (pkg.type === 'module') {
        pkg.type = 'commonjs';
        fs.writeFileSync(antlrPkgPath, JSON.stringify(pkg, null, 4));
        console.log('Patched antlr4ng/package.json: set type to commonjs');
    }
}
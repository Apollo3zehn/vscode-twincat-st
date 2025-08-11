variables = [
    '_time', '_ltime', '_date', '_ldate',
    '_time_of_day', '_ltime_of_day', '_date_and_time', '_ldate_and_time'
]
literal = '2'
operators = ['+', '*', '=', '>=']

lines = []

# variable op literal
for var in variables:
    for op in operators:
        lines.append(f'_bit := {var} {op} {literal};')

# variable op variable (all pairs, including self)
for var1 in variables:
    for var2 in variables:
        for op in operators:
            lines.append(f'_bit := {var1} {op} {var2};')

with open('all_combinations.st', 'w') as f:
    for line in lines:
        f.write(line + '\n')

print(f'Generated {len(lines)} combinations in all_combinations.st')

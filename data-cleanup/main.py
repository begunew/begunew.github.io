# Read the cleaned file
with open('formatted_cleaned.txt', 'r') as file:
    lines = [line.strip() for line in file.readlines()]

# Prepare the JavaScript object
js_object = "const behavioralQuestions = {\n"

# Group lines into groups of four
for i in range(0, len(lines), 4):
    js_object += f"  {i//4 + 1}: [\n"
    for j in range(i, min(i + 4, len(lines))):
        js_object += f"    \"{lines[j]}\",\n"
    js_object = js_object.rstrip(",\n") + "\n  ],\n"

js_object = js_object.rstrip(",\n") + "\n};"

# Write the JavaScript object to a new file
with open('behavioralQuestions.js', 'w') as output:
    output.write(js_object)

print("JavaScript object created in 'behavioralQuestions.js'")

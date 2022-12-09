f = open("./day-4.txt", "r")
x = f.read()

x = x[:-1]
x = x.split("\n")

score = 0
score_two = 0
for pair in x:
    assignments = pair.split(",")

    boundaries = assignments[0].split("-")
    lower_one = int(boundaries[0])
    upper_one = int(boundaries[1])

    boundaries = assignments[1].split("-")
    lower_two = int(boundaries[0])
    upper_two = int(boundaries[1])

    if (lower_one <= lower_two and upper_one >= upper_two) or (lower_one >= lower_two and upper_one <= upper_two):
        score += 1
    
    if (upper_one >= lower_two and upper_two >= upper_one) or (upper_two >= lower_one and upper_one >= upper_two):
        score_two += 1

print(score)
print(score_two)

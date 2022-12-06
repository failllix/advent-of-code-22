import string

f = open("./day-3.txt", "r")
x = f.read()

rucksacks = x.split("\n")

def getScoreForChar(c):
    if c.isupper():
        return string.ascii_uppercase.index(c) + 27
    else:
        return string.ascii_lowercase.index(c) + 1

score = 0

for rucksack in rucksacks:
    compartOne = rucksack[0:int(len(rucksack) / 2)]
    compartTwo = rucksack[int(len(rucksack) / 2):]

    for c in compartOne:
        if c in compartTwo:
            score += getScoreForChar(c)
            break

print(score)

score = 0
index = 0
while index + 2 < len(rucksacks):
    one = rucksacks[index]
    two = rucksacks[index + 1]
    three = rucksacks[index + 2]
    for c in one:
        if c in two and c in three:
            score += getScoreForChar(c)
            break
    index += 3

print(score)

with open("inputs/day-one.txt", "r") as f:
    inp = f.read().splitlines()
inp = list(map(int, inp))

increase = 0
for index, i in enumerate(inp):
    if index == 0:
        continue
    if i > inp[index-1]:
        increase += 1
print(increase)
from .utils import read_file

inp = read_file(day='one', map_func=int)

increase = 0
for index, i in enumerate(inp):
    if index == 0:
        continue
    if i > inp[index-1]:
        increase += 1
print(increase)

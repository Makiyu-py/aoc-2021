from .utils import read_file


def inp_map(x):
    x = x.split(" ")
    x[1] = int(x[1])
    return x


inp = read_file(day="one", map_func=inp_map)

hor_pos = 0
depth = 0

for pos, x in inp:
    # horizontal position
    if pos == "forward":
        hor_pos += x

    # depth
    elif pos == "down":
        depth += x
    elif pos == "up":
        depth -= x

out = hor_pos * depth
print(out)

import functools

from .utils import read_file

inp = read_file(day="three", map_func=list)

gamma_rate = "0b"
epsilon_rate = "0b"

for i in range(len(inp[0])):
    combined_list = list(
        functools.reduce(
            lambda x, y: x + y[i],
            [""] + inp  # kinda hacky but it works lmao
        )
    )
    zero_count = combined_list.count("0")
    one_count = combined_list.count("1")

    if zero_count > one_count:
        gamma_rate += "0"
        epsilon_rate += "1"
    else:
        gamma_rate += "1"
        epsilon_rate += "0"

out = int(gamma_rate, 2) * int(epsilon_rate, 2)
print(out)

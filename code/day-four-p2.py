# i am not recreating this in js fight me
import functools
import re

from .utils import read_file

inp = read_file(day="four")

to_draw = list(map(int, inp[0].split(",")))
bingo_boards = []
empty_items = [i for i, val in enumerate(inp) if val == ""]

# get the boards
for index, i in enumerate(empty_items):
    if index == len(empty_items) - 1:
        bingo_boards.append(inp[i + 1 :])
    else:
        bingo_boards.append(inp[i + 1 : empty_items[index + 1]])


def make_boards_better(x):
    x = re.findall(r"\d+", x)  # if my regex is bad don't blame me
    return list(map(int, x))


bingo_boards = [list(map(make_boards_better, l)) for l in bingo_boards]
# the actual searching
loser_board = None
board_won = []
drawn_nums = 5

while True:
    drawn_li = to_draw[:drawn_nums]
    found_board = False
    for index, i in enumerate(bingo_boards):
        if index in board_won:
            continue
        # check rows first
        for r in i:
            if all(n in drawn_li for n in r):
                board_won.append(index)
                found_board = True

        if found_board:
            found_board = False
            continue

        # columns
        for c in range(5):
            if all(n in drawn_li for n in [m[c] for m in i]):
                board_won.append(index)

    if len(board_won) == len(bingo_boards):
        loser_board = board_won[-1]
        break

    if drawn_nums < len(to_draw) - 1:
        drawn_nums += 1


def get_unmatched(x, y):
    m = list(filter(lambda w: w not in to_draw[:drawn_nums], y))
    return x + m


unmarked = functools.reduce(get_unmatched, bingo_boards[loser_board], [])
out = sum(unmarked) * to_draw[drawn_nums - 1]
print(out)

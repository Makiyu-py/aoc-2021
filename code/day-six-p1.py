class LanternFish:
    def __init__(self, timer: int) -> None:
        self.timer = timer
        self.has_bred = False

    def new_day(self):
        if self.timer == 0:
            self.timer = 6
            return True
        else:
            self.timer = self.timer - 1

from .utils import read_file

inp = [LanternFish(i) for i in read_file(day='six', map_func=lambda n: [int(m) for m in n.split(',')])[0]]

for day in range(18):
    new_breeds = len(list(filter(lambda m: m is True, [i.new_day() for i in inp])))
    for m in range(new_breeds): inp.append(LanternFish(8))

    print(f"Day {day+1} Population:", len(inp))
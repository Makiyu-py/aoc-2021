def read_file(*, day, map_func=None):
    with open(f"inputs/day-{day}.txt", "r") as f:
        inp = f.read().splitlines()

    if map_func:
        return list(map(map_func, inp))
    
    return inp

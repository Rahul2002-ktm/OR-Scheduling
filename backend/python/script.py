import sys
import numpy as np
import random
import json

# Define parameters
num_employees = 20
num_operation_rooms = 5
num_onlookers = 10
num_shifts = 3
num_days = int(sys.argv[1])
num_time_slots_per_day = 3
num_surgeries_waiting = int(sys.argv[2])
num_surgeons = int(sys.argv[3])
num_iterations = int(sys.argv[4])
planning_horizon_days = 7


# Generate random parameters
def generate_random_params():
    return {
        "operating_duration": np.random.randint(1, 4, size=num_surgeries_waiting),
        "deadline": np.random.randint(1, 8, size=num_surgeries_waiting),
        "max_operating_time_surgeon": np.random.randint(4, 9, size=num_surgeons),
        "operating_rooms_available": np.random.randint(1, 6, size=(num_days, num_time_slots_per_day)),
        "reg_opening_time": np.random.randint(1, 4, size=(num_days, num_time_slots_per_day)),
        "max_permissible_overtime": np.random.randint(1, 4, size=(num_days, num_time_slots_per_day)),
        "sum_operating_times_surgeon": np.random.randint(1, 10, size=(num_days, num_surgeons)),
        "operating_cost": np.random.randint(1000, 5000, size=(num_days, num_operation_rooms)),
        "cost_ratio": np.random.uniform(1.2, 2.5),
        "no_of_population": 10,
        "max_no_of_exploration": 5,
        "max_no_of_elite_solutions": 3,
        "max_no_of_iteration": 100,
    }

params = generate_random_params()

# Generate random initial solution
def generate_solution():
    return np.random.randint(0, num_operation_rooms, size=(num_days, num_shifts))

# Evaluate the fitness of a solution
def evaluate(solution, params):
    fitness = 0

    # Number of surgeries waiting to be operated
    fitness -= np.sum(solution >= num_operation_rooms)

    # Number of operating rooms available on each day
    for day in range(num_days):
        for time_slot in range(num_time_slots_per_day):
            fitness -= max(solution[day] == solution[day, time_slot]) - 1

    # Other evaluation criteria...

    return fitness

# Employed bee phase
def employed_bee_phase(solutions, fitness_values, params):
    for i in range(num_employees):
        new_solution = solutions[i].copy()
        j = np.random.randint(0, num_days)
        k = np.random.randint(0, num_shifts)
        new_solution[j, k] = np.random.randint(0, num_operation_rooms)
        new_fitness = evaluate(new_solution, params)
        if new_fitness > fitness_values[i]:
            solutions[i] = new_solution
            fitness_values[i] = new_fitness

# Onlooker bee phase
def onlooker_bee_phase(solutions, fitness_values, params):
    total_fitness = sum(fitness_values)
    for i in range(num_onlookers):
        selected = -1
        r = random.uniform(0, total_fitness)
        for j in range(num_employees):
            r -= fitness_values[j]
            if r <= 0:
                selected = j
                break
        new_solution = solutions[selected].copy()
        j = np.random.randint(0, num_days)
        k = np.random.randint(0, num_shifts)
        new_solution[j, k] = np.random.randint(0, num_operation_rooms)
        new_fitness = evaluate(new_solution, params)
        if new_fitness > fitness_values[selected]:
            solutions[selected] = new_solution
            fitness_values[selected] = new_fitness

# Scout bee phase
def scout_bee_phase(solutions, fitness_values, params):
    for i in range(num_employees):
        if random.random() < 0.01:
            solutions[i] = generate_solution()
            fitness_values[i] = evaluate(solutions[i], params)

# Main ABC algorithm
def abc_algorithm(params):
    solutions = [generate_solution() for _ in range(num_employees)]
    fitness_values = [evaluate(solution, params) for solution in solutions]
    for _ in range(num_iterations):
        employed_bee_phase(solutions, fitness_values, params)
        onlooker_bee_phase(solutions, fitness_values, params)
        scout_bee_phase(solutions, fitness_values, params)
    best_solution = solutions[np.argmax(fitness_values)]
    best_fitness = max(fitness_values)
    return best_solution, best_fitness

# Run the algorithm
best_solution, best_fitness = abc_algorithm(params)
best_solution_lists = best_solution.tolist()
best_sol = json.dumps(best_solution_lists)
print(best_sol)

sys.stdout.flush()
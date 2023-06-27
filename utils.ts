import { Exercise, Workout } from "./types";
import { getExerciseList } from "./data/exercises";
import { v4 as uuidv4 } from 'uuid';

export function createExercise(name: string, weight: number, sets: number, reps: number): Exercise {
    var id: number = uuidv4();
    return {
        id: id,
        name: name,
        weight: weight,
        sets: sets,
        reps: reps,
    };
};

export function createWorkout(name: string, exercises: Exercise[]): Workout {
    var id: number = uuidv4();
    return {
        id: id,
        name: name,
        exercises: exercises,
    };
};
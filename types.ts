export interface Exercise {
    id: string;
    name: string;
    weight: number;
    sets: number;
    reps: number;
    completed: boolean;
}

export interface Workout {
    id: number;
    name: string;
    exercises: Exercise[];
}
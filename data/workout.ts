  import { Workout } from "../types";
  
  var exercise1: string = "deadlift";
  var exercise2: string = "ohp";
  var exercise3: string = "row";
  var exercise4: string = "pullup";

  var workout1 = {
    id : 1,
    name: "workout1",
    exercises:
    [
    { id: 1, name: exercise1, weight: 0, sets: 0, reps: 0 },
    { id: 2, name: exercise2, weight: 0, sets: 0, reps: 0 },
    { id: 3, name: exercise3, weight: 0, sets: 0, reps: 0 },
    { id: 4, name: exercise4, weight: 0, sets: 0, reps: 0 },
  ]};

  var exercise5: string = "squat";
  var exercise6: string = "bench";
  var exercise7: string = "preacher curl";
  var exercise8: string = "lat pulldown";

  var workout2 = {
    id : 2,
    name: "workout2",
    exercises:
    [
    { id: 5, name: exercise5, weight: 0, sets: 0, reps: 0 },
    { id: 6, name: exercise6, weight: 0, sets: 0, reps: 0 },
    { id: 7, name: exercise7, weight: 0, sets: 0, reps: 0 },
    { id: 8, name: exercise8, weight: 0, sets: 0, reps: 0 },
  ]};

  export var workoutList: Workout[] = [
    workout1,
    workout2,
    ];
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Workout, Exercise } from "../types";

interface StartWorkoutProps {
  workout: Workout;
}

const StartWorkout: React.FC<StartWorkoutProps> = ({ workout }) => {
  const [completedWorkout, setCompletedWorkout] = useState<Workout>(workout);
  const [inputWeights, setInputWeights] = useState<{
    [exerciseId: string]: string;
  }>({});
  const [inputSets, setInputSets] = useState<{ [exerciseId: string]: string }>(
    {}
  );
  const [inputReps, setInputReps] = useState<{ [exerciseId: string]: string }>(
    {}
  );

  const handleInputChange = (
    exerciseId: string,
    field: "weight" | "sets" | "reps",
    value: string
  ) => {
    switch (field) {
      case "weight":
        setInputWeights((prevInputWeights) => ({
          ...prevInputWeights,
          [exerciseId]: value,
        }));
        break;
      case "sets":
        setInputSets((prevInputSets) => ({
          ...prevInputSets,
          [exerciseId]: value,
        }));
        break;
      case "reps":
        setInputReps((prevInputReps) => ({
          ...prevInputReps,
          [exerciseId]: value,
        }));
        break;
    }
  };

  const handleSaveChanges = (exerciseId: string) => {
    const updatedExercises = completedWorkout.exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        return {
          ...exercise,
          weight: parseFloat(
            inputWeights[exerciseId] || String(exercise.weight)
          ),
          sets: parseInt(inputSets[exerciseId] || String(exercise.sets), 10),
          reps: parseInt(inputReps[exerciseId] || String(exercise.reps), 10),
        };
      }
      return exercise;
    });

    setCompletedWorkout((prevWorkout) => ({
      ...prevWorkout,
      exercises: updatedExercises,
    }));
  };

  return (
    <View>
      {completedWorkout.exercises.map((exercise) => (
        <View key={exercise.id}>
          <Text>{exercise.name}</Text>
          <TextInput
            placeholder="Weight"
            value={inputWeights[exercise.id]}
            onChangeText={(value) =>
              handleInputChange(exercise.id, "weight", value)
            }
          />
          <TextInput
            placeholder="Sets"
            value={inputSets[exercise.id]}
            onChangeText={(value) =>
              handleInputChange(exercise.id, "sets", value)
            }
          />
          <TextInput
            placeholder="Reps"
            value={inputReps[exercise.id]}
            onChangeText={(value) =>
              handleInputChange(exercise.id, "reps", value)
            }
          />
          <Button
            title="Save Changes"
            onPress={() => handleSaveChanges(exercise.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default StartWorkout;

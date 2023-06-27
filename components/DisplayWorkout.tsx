import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { workoutList } from "../data/workout";
import StartWorkout from "./StartWorkout";

export default function DisplayWorkout() {
  const [workout, setWorkout] = useState<boolean>(true);
  const [workout1, setWorkout1] = useState(workoutList[0]);
  const [workout2, setWorkout2] = useState(workoutList[1]);
  const workoutToDisplay = workout ? workout1.exercises : workout2.exercises;
  const workoutToSelect = workout ? workout1 : workout2;

  var handleClick = () => {
    setWorkout(!workout);
  };

  var handleDay = () => {
    if (workoutToDisplay === workout1.exercises) {
      const workoutToSelect = workout1
      return "Day 1";
    } else {
      const workoutToSelect = workout2
      return "Day 2";
    }
  };

  return (
    <View style={styles.container}>
      <Text>{handleDay()}</Text>
      {workoutToDisplay.map((exercise: any) => (
        <View key={exercise.id}>
          <Text>
            {exercise.name}:{exercise.weight}Kg&nbsp;{exercise.sets}x
            {exercise.reps}
          </Text>
        </View>
      ))}
      <Button title="Switch" onPress={handleClick} />
      <Button
          title="Select workout"
          onPress={() => <StartWorkout workout={workoutToSelect} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

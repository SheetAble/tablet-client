import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { AsyncButton } from "./AsyncButton";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "../redux/slicers/counter/counterSlice";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  const status = useAppSelector((state) => state.counter.status);
  const dispatch = useAppDispatch();

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.textbox}
          value={incrementAmount}
          keyboardType="numeric"
          onChangeText={setIncrementAmount}
        />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            <Text style={styles.buttonText}>Add Amount</Text>
          </TouchableOpacity>
          <AsyncButton
            style={styles.button}
            disabled={status !== "idle"}
            onPress={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            <Text style={styles.buttonText}>Add Async</Text>
          </AsyncButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {},
  value: {},
  button: {},
  buttonText: {
    fontSize: 25,
  },
  textbox: {},
});

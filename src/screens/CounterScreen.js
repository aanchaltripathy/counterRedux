// In CounterScreen.js, change the import to:
import { increment, decrement, incrementByAmount } from '../redux/slices/counterSlice';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Toolkit Counter</Text>
      
      <Text style={styles.countDisplay}>Count: {count}</Text>
      
      <View style={styles.buttonRow}>
        <Button 
          title="+" 
          onPress={() => dispatch(increment())} 
        />
        <Button 
          title="-" 
          onPress={() => dispatch(decrement())} 
        />
      </View>
      
      <View style={styles.amountContainer}>
        <TextInput
          style={styles.input}
          value={incrementAmount}
          onChangeText={setIncrementAmount}
          keyboardType="numeric"
        />
        <Button
          title="Add Amount"
          onPress={() => 
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countDisplay: {
    fontSize: 48,
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CounterScreen;
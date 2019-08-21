import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from "./styles";

import { OperationButtons } from './components/operation-buttons.component'
import { ControlButtons } from './components/control-buttons.component';
import { Results } from './components/results.component';
import { ValueButtons } from './components/value-buttons.component'
import { convertOperations } from './utility';

const initState = {
  result: 0,
  allOperations: [],
  currentNumber: 0,
  hex: false
};

export default App = () => {
  const [result, setResult] = useState(initState.result);
  const [allOperations, setAllOperations] = useState(initState.allOperations);
  const [currentNumber, setCurrentNumber] = useState(initState.currentNumber);
  const [hex, setHex] = useState(initState.hex);

  const onControlPress = (control) => {
    switch (control) {
      case 'AC': {
        clear();
        break;
      }
      case '=': {
        calculate();
        break;
      }
      default: {
        break;
      }
    }
  };

  const onOperationPress = (action) => {
    let newOperations = [];

    if (result && !currentNumber) {
      newOperations = [{
        hex: hex,
        value: hex ? result.replace('0x', ''): result,
        action
      }];
    } else if(result && !!allOperations.length && currentNumber) {
      newOperations.push({
        hex: hex,
        value: currentNumber,
        action
      });
      setResult(initState.result);
    } else {
      newOperations = [...allOperations];
      newOperations.push({
        hex: hex,
        value: currentNumber,
        action
      });
    }

    setAllOperations(newOperations);
    setCurrentNumber(initState.currentNumber);
  };

  const onValuePress = (value) => {
    const prevCurrentNumber = currentNumber || '';
    setCurrentNumber(`${prevCurrentNumber}${value}`);
  };

  const clear = () => {
    setResult(initState.result);
    setAllOperations(initState.allOperations);
    setCurrentNumber(initState.currentNumber);
  };

  const calculate = () => {
    const newOperations = [ ...allOperations ];
    if (!currentNumber) return;

    newOperations.push({
      hex: hex,
      value: currentNumber
    });
    setAllOperations(newOperations);

    const newResult = hex
        ? `0x${eval(convertOperations(newOperations)).toString(16).toUpperCase()}`
        : eval(convertOperations(newOperations)).toString();

    setCurrentNumber(initState.currentNumber);
    setResult(newResult);
  };

  const switchHandler = (val) => {
    setHex(val);
    setCurrentNumber(0);
    const newResult = val ? `0x${parseInt(result).toString(16).toUpperCase()}` : parseInt(result.toString());
    setResult(newResult);
  };

  return (
      <View style={styles.container}>
        <Results
            hex={hex}
            result={result.toString()}
            allOperations={!!allOperations.length ? convertOperations(allOperations) : ''}
            currentNumber={currentNumber.toString()}
        />
        <ControlButtons
            hex={hex}
            switchHex={(val) => switchHandler(val)}
            onPress={(control) => onControlPress(control)}
        />
        <OperationButtons
            onPress={(action) => onOperationPress(action)}
        />
        <ValueButtons
            hex={hex}
            onPress={(value) => onValuePress(value)}
        />
      </View>
  );
};

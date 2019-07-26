import React from 'react';
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
  hex: true, // HEX, false is for DEC
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initState,
    }

    // TODO: handle all Operations
    // TODO: current number 0 == nothing
  }

  onControlPress = (control) => {
    switch (control) {
      case 'AC': {
        this.clear();
        break;
      }
      case '=': {
        this.calculate();
        break;
      }
      default: {
        break;
      }
    }
  };

  onOperationPress = (action) => {
    const { currentNumber, allOperations, hex } = this.state;
    allOperations.push({
      hex: hex,
      value: currentNumber,
      action
    });
    this.setState({
      allOperations,
      currentNumber: 0
    });
  };

  onValuePress = (value) => {
    const { currentNumber: _currNumber } = this.state;
    const currentNumber = _currNumber ? _currNumber : '';

    this.setState({
      currentNumber: `${currentNumber}${value}`,
    })
  };

  clear = () => {
    this.setState({
      allOperations: [],
      currentNumber: 0,
      result: 0
    });
  };

  calculate = () => {
    const { currentNumber, allOperations, hex } = this.state;
    allOperations.push({
      hex: hex,
      value: currentNumber
    });
  };

  switchHandler = (val) => {
    this.setState({
      hex: val,
      currentNumber: 0
    });
  };

  render() {
    const { result, allOperations, currentNumber, hex } = this.state;
    const resString = result.toString();
    const resCurrentNumber = currentNumber.toString();
    const resAllOperations = !!allOperations.length ? convertOperations(allOperations) : '';

    return (
        <View style={styles.container}>
          <Results
              hex={hex}
              result={resString}
              allOperations={resAllOperations}
              currentNumber={resCurrentNumber}
          />
          <ControlButtons
              hex={hex}
              switchHex={(val) => this.switchHandler(val)}
              onPress={(control) => this.onControlPress(control)}
          />
          <OperationButtons
              onPress={(action) => this.onOperationPress(action)}
          />
          <ValueButtons
              hex={hex}
              onPress={(value) => this.onValuePress(value)}
          />
        </View>
    );
  }
}


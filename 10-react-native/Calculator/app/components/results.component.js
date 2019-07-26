import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles";

export class Results extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { result, allOperations, currentNumber, hex } = this.props;
        return (
            <View>
                <Text style={styles.textStyle}>Result:</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={result}
                />
                <Text style={styles.textStyle}>All operations:</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={allOperations}
                />
                <Text style={styles.textStyle}>Current number:</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={hex
                        ? `0x${currentNumber}`
                        : currentNumber
                    }
                />
            </View>
        )
    }
}

import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles";

export const Results = ({result, allOperations, currentNumber, hex}) => {
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
};

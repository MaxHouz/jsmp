import React from "react";
import { styles } from "../styles";
import { View } from "react-native";
import { operationButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export const OperationButtons = ({onPress}) => {
    return (
        <View style={styles.rowButtonContainer}>
            {
                operationButtons.map(button => {
                    const { title, type } = button;
                    return (
                        <CalcBtn
                            key={title}
                            onPress={(action) => onPress(action)}
                            title={title}
                            styleContainer={{
                                ...styles.button,
                                ...type.style
                            }}
                        />
                    )
                })
            }
        </View>
    )
};

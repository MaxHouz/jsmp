import React from "react";
import { styles } from "../styles";
import { View } from "react-native";
import { operationButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export class OperationButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { onPress } = this.props;

        return (
            <View style={styles.rowButtonContainer}>
                {
                    operationButtons.map(button => {
                        const { title, type } = button;
                        return (
                            <CalcBtn
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
    }
}

import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { valueButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export class ValueButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { onPress, hex } = this.props;

        return (
            <>
                {
                    valueButtons.map(row => {
                        return (
                            <View style={styles.rowButtonContainer}>
                                {
                                    row.map(button => {
                                        const { title, type } = button;
                                        return (
                                            <CalcBtn
                                                onPress={(value) => onPress(value)}
                                                title={title}
                                                styleContainer={styles.button}
                                                disabled={ type.canDisable ? !hex : false }
                                            />
                                        )
                                    })
                                }
                            </View>
                        );
                    })
                }
            </>
        )
    }
}

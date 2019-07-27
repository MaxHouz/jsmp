import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { valueButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export const ValueButtons = ({onPress, hex}) => {
    return (
        <>
            {
                valueButtons.map((row, id) => {
                    return (
                        <View key={id} style={styles.rowButtonContainer}>
                            {
                                row.map(button => {
                                    const { title, type } = button;
                                    return (
                                        <CalcBtn
                                            key={title}
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
};

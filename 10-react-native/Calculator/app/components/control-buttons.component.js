import React from 'react';
import { styles } from "../styles";
import { Switch, Text, View } from "react-native";
import { controlButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export const ControlButtons = ({hex, switchHex, onPress}) => {
    return (
        <View style={styles.buttonsContainer}>
            <View style={{
                ...styles.rowButtonContainer,
                justifyContent: 'space-between',
            }}>
                <View style={styles.switchStyle}>
                    <Text>
                        Dec
                    </Text>
                    <Switch
                        value={hex}
                        onValueChange={(val) => switchHex(val)}
                    />
                    <Text>
                        Hex
                    </Text>
                </View>
                <View style={styles.controlsContainer}>
                    {
                        controlButtons.map(button => {
                            const { title, type } = button;
                            return (
                                <CalcBtn
                                    key={title}
                                    onPress={(control) => onPress(control)}
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
            </View>
        </View>
    )
};

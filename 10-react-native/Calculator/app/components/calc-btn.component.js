import React from 'react';
import { colors } from "../styles";
import { Text, TouchableOpacity } from "react-native";

export const CalcBtn = ({onPress, styleContainer, disabled, title}) => {
    const _style = disabled
        ? {
            ...styleContainer,
            backgroundColor: colors.GREY,
        }
        : styleContainer;

    return (
        <TouchableOpacity
            onPress={disabled ? () => {} : () => {onPress(title)}}
            style={_style}
            activeOpacity={disabled ? 1 : 0.5}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

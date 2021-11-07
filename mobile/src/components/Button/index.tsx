import React from 'react';

import { TouchableOpacity, TouchableOpacityProps, Text, ColorValue } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
}

export function Button({ title, color, backgroundColor, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            {...rest}
        >
            <Text style={[styles.title, { color }]}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}
import React from "react";
import { Image } from 'react-native'

import { styles } from './styles';

const SIZES = {
    SMALL: {
        containerSize: 32,
        avatarSize: 28,
    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 42,
    }
}

type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';
}

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: Props) {
    const { containerSize, avatarSize } = SIZES[sizes];

    return (
        <Image source={{ uri: 'https://github.com/fabinho070.png' }}
            style={[
                styles.avatar,
                {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2
                }
            ]} />
    );
}
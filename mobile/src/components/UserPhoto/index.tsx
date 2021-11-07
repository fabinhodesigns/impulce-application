import React from "react";
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../theme";

import avatarImg from '../../assets/avatar.png';

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

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: Props) {
    const { containerSize, avatarSize } = SIZES[sizes];

    return (
        <LinearGradient
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 0.1 }}
            colors={[COLORS.PINK, COLORS.YELLOW]}
            style={[
                styles.container,
                {
                    width: containerSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2
                }
            ]}
        >

            <Image source={{ uri: imageUri || AVATAR_DEFAULT }}
                style={[
                    styles.avatar,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize / 2
                    }
                ]} />
        </LinearGradient>
    );
}
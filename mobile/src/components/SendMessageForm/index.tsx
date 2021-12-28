import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../Button";
import { COLORS } from "../../theme";

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                keyboardAppearance="dark"
                placeholder="Digite a sua mensagem..."
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                style={styles.input}
                multiline
                onChangeText={setMessage}
                value={message}
                maxLength={140}
                editable={!setSendingMessage}
            />

            <Button
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
            />
        </View>
    );
}
import React from "react";
import { ScrollView } from 'react-native';
import { Message } from '../Message'
import { styles } from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text: 'TESTE',
        user: {
            name: 'FABIANO',
            avatar_url: 'TESTES'
        }
    }
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message} />
        </ScrollView>
    );
}

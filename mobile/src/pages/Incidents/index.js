import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents() {
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image style={ logoImg }/>
                <Text style={ styles.headerText }>
                    Total de <Text style={ styles.headerTextBold }>0 casos.</Text>
                </Text>
            </View>

            <Text style={ styles.title }>Bem-vindo!</Text>
            <Text style={ styles.description }>Escolha um dos casos abaixo e salve o dia.</Text>
        </View>
    );
}
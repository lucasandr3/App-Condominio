import React from 'react';
import S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({IconSvg, placeholder, keyboardType, value, onChangeText, password}) => {
    return (
        <S.InputArea>
            <Icon name={IconSvg} size={20} color="#666e78" />
            <S.Input
                placeholder={placeholder}
                placeholderTextColor="#666e78"
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </S.InputArea>
    );
}

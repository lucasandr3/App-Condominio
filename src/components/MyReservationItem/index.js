import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert} from 'react-native';

import Api from '../../services/Api';

import { 
    Container,
    CoverImage,
    InfoArea,
    Title,
    InfoText,
    DataText,
    ButtonItem, 
} from './style';

const MyReservationItem = ({data, refreshFunction}) => {

    const handleClick = async () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja cancelar a reserva ?',
            [
                { text: 'Sim, tenho certeza', onPress: removeReservation },
                { text: 'Cancelar', onPress: null, style: 'cancel'}
            ]
        )
    }

    const removeReservation = async () => {
        let result = await Api.removeReservation(data.id);
        if(result.error === '') {
            refreshFunction();
        } else {
            alert(result.error);
        }
    }

  return (
    <Container>
            <CoverImage source={{uri: data.cover}} resizeMode="cover" />
            <InfoArea>
                <Title>{data.title}</Title>
                <InfoText>Horário reservado:</InfoText>
                <DataText>{data.datereserved}</DataText>
            </InfoArea>
        <ButtonItem onPress={handleClick}>
            <Icon name="calendar-times-o" size={25} color="#ff6b6b" />
        </ButtonItem>
    </Container>
  );
}

export default MyReservationItem;
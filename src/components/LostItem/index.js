import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert} from 'react-native';

import Api from '../../services/Api';

import S from './style';

const LostItem = ({data, showButton, refreshFunction}) => {

    const [likesCount, setLikesCount] = useState(data.likes);
    const [liked, setLiked] = useState(data.liked);

    const handleLike = async () => {
        setLiked(!liked);
        const result = await Api.likeWallPost(data.id)
        if(result.error === '') {
            setLikesCount(result.likes);
            setLiked(result.liked);
        } else {
            alert(result.error)
        }
    }

    const handleIsMine = () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que item é seu ?',
            [
                { text: 'Sim, tenho certeza', onPress: handleSetRecovered },
                { text: 'Cancelar', onPress: null, style: 'cancel'}
            ]
        )
    }

    const handleSetRecovered = async () => {
        let result = await Api.setRecovered(data.id);
        if(result.error === '') {
            refreshFunction();
            alert('Pegue seu item na portaria');
        } else {
            alert(result.error)
        }
    }

  return (
    <S.Box>
        <S.Photo source={{uri: data.photo}} />
        <S.Title>{data.description}</S.Title>

        <S.InfoTitle>Encontrado em</S.InfoTitle>
        <S.InfoText>{data.where}</S.InfoText>

        <S.InfoTitle>Data</S.InfoTitle>
        <S.InfoText>{data.datecreated}</S.InfoText>

        {showButton &&
            <S.MineButton onPress={handleIsMine}>
                <Icon name="hand-pointer-o" size={24} color="#fff" />
                <S.MineButtonText>É meu</S.MineButtonText>
            </S.MineButton>
        }
    </S.Box>
  );
}

export default LostItem;

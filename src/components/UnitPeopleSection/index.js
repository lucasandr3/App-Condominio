import React from 'react';
import S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert} from 'react-native';
import Api from '../../services/Api';

export default ({list, refreshFunction}) => {

    const handleRemove = (index) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir está pessoa ?',
            [
                { text: 'Sim, tenho certeza', onPress: ()=>removeItem(index) },
                { text: 'Cancelar', onPress: null, style: 'cancel'}
            ]
        )
    }

    const removeItem = async (index) => {
        let result = await Api.RemoveUnitItem(
            'person',
            list[index].id
        );
        if(result.error === '') {
            refreshFunction();
        } else {
            alert(result.error)
        }
    }

    return (
        <S.Box>
            {list.map((item, index)=>(
                <S.Item key={index}>
                    <S.InfoArea>
                        <S.StrongText>{item.name}</S.StrongText>
                        <S.RegularText>Data de Nascimento: {item.birthdate}</S.RegularText>
                    </S.InfoArea>
                    <S.RemoveButton onPress={()=>handleRemove(index)}>
                        <Icon name="remove" size={24} color="#ff6b6b" />
                    </S.RemoveButton>
                </S.Item>
            ))}
        </S.Box>
    );
}

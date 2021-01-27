import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);

    return(
        <S.Container>
            <S.Scroller>
                {/* {loading &&
                    <S.LoadingIcon color="#8863E6" size="large" />
                } */}
                <S.ButtonText>Tela de Achados e Perdidos</S.ButtonText>
            </S.Scroller>            
        </S.Container>
    );
};
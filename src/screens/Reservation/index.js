import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ReservationItem from '../../components/ReservationItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [reserves, setReserves] = useState([]);

    useEffect(() => { 
        getReservations();
    }, []);

    const getReservations = async () => {
        setReserves([]);
        setLoading(true);
        let result = await Api.getReservationsAll();
        setLoading(false);
        if(result.error === '') {
            setReserves(result.list);
        } else {
            alert(result.error)
        }
    }

    const handleMyReservations = () => {
        navigation.navigate('ReservationMy');
    }

    return(
        <S.Container>
        {!loading && reserves.length === 0 &&
            <S.NoDocs>
                <S.NoDocText>Não há Documentsos.</S.NoDocText>
                <S.NoDocImage source={require('../../assets/noData2.png')} />
            </S.NoDocs>
        }
        <S.ButtonArea onPress={handleMyReservations}>
            <S.ButtonText>Minhas Reservas</S.ButtonText>
        </S.ButtonArea>
        <S.Title>Selecione uma Área</S.Title>
        <S.List
          keyboardShouldPersistTaps="handled"
          data={reserves}
          onRefresh={getReservations}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <ReservationItem data={item} />}
        />
      
    </S.Container>
    );
};
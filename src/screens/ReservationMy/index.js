import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';

import MyReservationItem from '../../components/MyReservationItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => { 
        getList();
    }, []);

    useEffect(() => { 
        const unsubscribe = navigation.addListener('focus', () => {
            getList();
        }); 
        return unsubscribe;
    }, [navigation]);

    const getList = async () => {
        setList([]);
        setLoading(true);
        let result = await Api.getMyReservations();
        setLoading(false);
        if(result.error === '') {
            setList(result.list);
        } else {
            alert(result.error)
        }
    }

    return(
        <S.Container>
        {!loading && list.length === 0 &&
            <S.NoDocs>
                <S.NoDocText>Você não tem reservas.</S.NoDocText>
                <S.NoDocImage source={require('../../assets/billet.png')} />
            </S.NoDocs>
        }
        <S.List
          keyboardShouldPersistTaps="handled"
          data={list}
          onRefresh={getList}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <MyReservationItem data={item} refreshFunction={getList} />}
        />
      
    </S.Container>
    );
};
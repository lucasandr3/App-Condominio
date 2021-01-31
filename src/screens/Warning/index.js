import React, {useState, useLayoutEffect, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome';

import WarningItem from '../../components/WarningItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <S.AddButton onPress={()=>navigation.navigate('WarningAdd')}>
                    <Icon name="plus" size={20} color={context.theme === 'light' ? '#000' : '#fff'}/>
                    {/* <S.AddText>Nova ocorrência</S.AddText> */}
                </S.AddButton>
            )
        });
    }, [])

    useEffect(() => {
        getWarnings();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getWarnings();
        });
        return unsubscribe;
    }, [navigation]);

    const getWarnings = async () => {
        setList([]);
        setLoading(true);
        let result = await Api.getWarnings();
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
                <S.NoDocText>Não há Ocorrências.</S.NoDocText>
                <S.NoDocImage source={require('../../assets/paper.png')} />
            </S.NoDocs>
        }
        <S.List
          keyboardShouldPersistTaps="handled"
          data={list}
          onRefresh={getWarnings}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <WarningItem data={item} />}
        />

    </S.Container>
    );
};

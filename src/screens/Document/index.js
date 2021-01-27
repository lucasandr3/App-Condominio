import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DocItem from '../../components/DocItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);

    useEffect(() => { 
        getDocs();
    }, []);

    const getDocs = async () => {
        setDocs([]);
        setLoading(true);
        let result = await Api.getAllDocs();
        setLoading(false);
        if(result.error === '') {
            setDocs(result.list);
        } else {
            alert(result.error)
        }
    }

    return(
        <S.Container>
        {!loading && docs.length === 0 &&
            <S.NoDocs>
                <S.NoDocText>Não há Documentos para Mostrar.</S.NoDocText>
                <S.NoDocImage source={require('../../assets/file.png')} />
            </S.NoDocs>
        }
        <S.List
          keyboardShouldPersistTaps="handled"
          data={docs}
          onRefresh={getDocs}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <DocItem data={item} />}
        />
      
    </S.Container>
    );
};
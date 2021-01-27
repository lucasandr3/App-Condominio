import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';

import BilletItem from '../../components/BilletItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [billets, setBillets] = useState([]);

    useEffect(() => { 
        getBillets();
    }, []);

    const getBillets = async () => {
        setBillets([]);
        setLoading(true);
        let result = await Api.getAllBillets();
        setLoading(false);
        if(result.error === '') {
            setBillets(result.list);
        } else {
            alert(result.error)
        }
    }

    return(
        <S.Container>
        {!loading && billets.length === 0 &&
            <S.NoDocs>
                <S.NoDocText>Não há Boletos para esta Unidade.</S.NoDocText>
                <S.NoDocImage source={require('../../assets/billet.png')} />
            </S.NoDocs>
        }
        <S.List
          keyboardShouldPersistTaps="handled"
          data={billets}
          onRefresh={getBillets}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <BilletItem data={item} />}
        />
      
    </S.Container>
    );
};
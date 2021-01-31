import React, {useState, useEffect, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';

import LostItem from '../../components/LostItem';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [lostList, setLostList] = useState([]);
    const [recoveredList, setRecoveredList] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <S.AddButton onPress={()=>navigation.navigate('FoundAndLostAdd')}>
                    <Icon name="plus" size={20} color={context.theme === 'light' ? '#000' : '#fff'}/>
                </S.AddButton>
            )
        });
    }, []);

    useEffect(() => {
        getFoundAndLost();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFoundAndLost();
        });
        return unsubscribe;
    }, [navigation]);

    const getFoundAndLost = async () => {
        setLostList([]);
        setRecoveredList([]);
        setLoading(true);
        let result = await Api.getFoundAndLost();
        setLoading(false);
        if(result.error === '') {
            setLostList(result.lost);
            setRecoveredList(result.recovered);
        } else {
            alert(result.error)
        }
    }

    return(
        <S.Container>
            <S.Scroller>
                {loading &&
                <S.LoadingIcon color="#000" size="large" />
                }
                {!loading && lostList.length === 0 && recoveredList.length === 0 &&
                    <S.NoDocs>
                        <S.NoDocText>Não há itens perdidos/recuperados.</S.NoDocText>
                        <S.NoDocImage source={require('../../assets/billet.png')} />
                    </S.NoDocs>
                }

                {!loading && lostList.length > 0 &&
                    <>
                        <S.Title>Itens Perdidos</S.Title>
                        <S.ProductScroller
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                        >
                            {lostList.map((item, index)=>(
                               <LostItem
                                    key={index}
                                    data={item}
                                    showButton={true}
                                    refreshFunction={getFoundAndLost}
                               />
                            ))}
                        </S.ProductScroller>
                    </>
                }

                {!loading && recoveredList.length > 0 &&
                    <>
                        <S.Title>Itens Recuperados</S.Title>
                        <S.ProductScroller
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                        >
                            {recoveredList.map((item, index)=>(
                               <LostItem
                                    key={index}
                                    data={item}
                                    showButton={false}
                               />
                            ))}
                        </S.ProductScroller>
                    </>
                }
            </S.Scroller>
        </S.Container>
    );
};

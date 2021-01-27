import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkProperty = async () => {
            let property = await AsyncStorage.getItem('property');
            if(property) {
                property = JSON.parse(property);
                // escolher propriedade
                await chooseProperty(property);

            }
            setLoading(false); 
        }
        checkProperty();
    }, []);

    const handleButtonLogout = async () => {
        await Api.logout();
        navigation.reset({
            index: 1,
            routes: [{name: 'Login'}]
        });
    }

    const chooseProperty = async (property) => {
        await AsyncStorage.setItem('property', JSON.stringify(property));
        dispatch({
            type: 'setProperty',
            payload: {
                property
            }
        });

        navigation.reset({
            index: 1,
            routes: [{name: 'MainDrawer'}]
        });
    }

    return(
        <S.Container>
            <S.Scroller>
                {loading &&
                    <S.LoadingIcon color="#000" size="large" />
                }
                {!loading && context.user.user.properties.length > 0 &&
                    <>
                        <S.HeaderTitle>Olá {context.user.user.name}</S.HeaderTitle>
                        <S.HeaderTitle>Escolha uma das suas propriedades</S.HeaderTitle>

                        <S.PropertyList>
                            {context.user.user.properties.map((item, index) => (
                                <S.ButtonArea key={index} onPress={() => chooseProperty(item)}>
                                    <Icon name="home" size={22} color="#000" />
                                    <S.ButtonText>{item.name}</S.ButtonText>
                                </S.ButtonArea>
                            ))}
                        </S.PropertyList>
                    </>
                }
                {!loading && context.user.user.properties.length <= 0 &&
                    <S.BigArea>
                        <S.HeaderTitle>{context.user.user.name}, parabéns pelo cadastro.</S.HeaderTitle>
                        <S.HeaderTitle>Agora a administração precisa liberar seu acesso.</S.HeaderTitle>
                    </S.BigArea>
                }
            </S.Scroller>
            <S.ExitButtonArea onPress={handleButtonLogout}>
                <S.ExitButtonText>Sair</S.ExitButtonText>
            </S.ExitButtonArea>            
        </S.Container>
    );
};
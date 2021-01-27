import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';
import {Button} from 'react-native';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    useEffect(() => {
        const checkLogin = async () => {
            let token = await Api.getToken();
            let propertyExists = await AsyncStorage.getItem('property');
            
            if(token) {

                let result = await Api.validateToken();
                if(result.error === '') {

                    dispatch({
                        type: 'setUser',
                        payload: {
                            user: result.user
                        }
                    });

                    dispatch({
                        type: 'setToken',
                        payload: {
                            token
                        }
                    });

                    if(propertyExists) {
                        propertyExists = JSON.parse(propertyExists);

                        dispatch({
                            type: 'setProperty',
                            payload: {
                                property: propertyExists
                            }
                        });

                        navigation.reset({
                            index: 1,
                            routes: [{name: 'MainDrawer'}]
                        });

                    } else {
                        navigation.reset({
                            index: 1,
                            routes: [{name: 'ChooseProperty'}]
                        });
                    }

                } else {
                    alert(result.error);
                    dispatch({
                        type:'setToken',
                        payload: {
                            token: ''
                        }
                    })
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'Login'}]
                    });
                }

            } else {
                navigation.reset({
                    index: 1,
                    routes: [{name: 'Login'}]
                });
            }
        }

        checkLogin();
    }, [])

    const handleLogout = async () => {
       await Api.logout();
       navigation.reset({
        index: 1,
        routes: [{name: 'Login'}]
        });
    }

    return (
        <S.Container>
            <S.LoadImage source={require('../../assets/appartments.png')} resizeMode="contain" />
            <S.LoadingIcon color="#000" size="large" />
            {/* <S.Info>Aguarde um momento...</S.Info> */}
        </S.Container>
    );
}
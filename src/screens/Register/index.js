import React, {useState, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Fazer Cadastro'
        });
    }, [])

    const handleRegisterButton = async () => {
        if(name && email && cpf && password && passwordConfirm) {

            let result = await Api.register(name, email, cpf, password, passwordConfirm);
            if(result.error === '') {

                dispatch({
                    type: 'setToken',
                    payload: {
                        token: result.token
                    }
                });

                dispatch({
                    type: 'setUser',
                    payload: {
                        user: result.user
                    }
                });

                navigation.reset({
                    index: 1,
                    routes: [{name: 'ChooseProperty'}]
                });

            } else {
                alert(result.error);
            }
        } else {
            alert("Prencha os campos")
        }
    }

    return(
        <S.Container>

            <S.Field
                placeholder="Digite seu Nome Completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <S.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />

            <S.Field
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={t=>setEmail(t)}
            />

            <S.Field
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassword(t)}
            />

            <S.Field
                placeholder="Digite a Senha novamente"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={t=>setPasswordConfirm(t)}
            />
            
            <S.ButtonArea onPress={handleRegisterButton}>
                <S.ButtonText>CADASTRAR-SE</S.ButtonText>
            </S.ButtonArea>
        </S.Container>
    );
};
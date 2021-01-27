import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';

import SignInput from '../../components/SignInput';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoginButton = async () => {
        if(cpf && password) {
            setLoading(true);
            let result = await Api.login(cpf, password);
            setLoading(false);
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

    const handleRegisterButton = () => {
        navigation.navigate('Register');   
    }

    return (
        <S.Container>
            <S.Logo 
                source={require('../../assets/appartments.png')} 
                resizeMode="contain" 
            />
            <S.TextLogo>Cond. Jardim Tropical</S.TextLogo>

            <SignInput
                IconSvg="id-card-o"
                keyboardType="numeric"
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />

            <SignInput
                IconSvg="eye"
                keyboardType="visible-password"
                secureTextEntry={true}
                placeholder="Digite sua Senha"
                value={password}
                onChangeText={t=>setPassword(t)}
            />
        
            <S.ButtonArea onPress={handleLoginButton}>
                <S.ButtonText>ENTRAR</S.ButtonText>
            </S.ButtonArea>

            <S.SignMessageButton onPress={handleRegisterButton}>
                <S.SignMessageButtonText>Não possui cadastro ?</S.SignMessageButtonText>
                <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold>
            </S.SignMessageButton>

            {loading &&
                <S.LoadingArea>
                    <S.LoadingIcon size="large" color="#FFF"/>
                </S.LoadingArea>
            }
        </S.Container>
    );
}
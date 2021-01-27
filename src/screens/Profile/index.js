import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [name, setName] = useState(context.user.user.name);
    const [cpf, setCpf] = useState(context.user.user.cpf);
    const [email, setEmail] = useState(context.user.user.email);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleEditButton = async () => {
 
        let result = await Api.editUser(name, email, password, passwordConfirm);
        
        if(result.error === '') {

            alert('Dados Alterados com sucesso');

        } else {
            alert(result.error);
        }
    
    }

    return(
        <S.Container>
            <S.Scroller>

            <S.InfoText>O CPF Não Pode Ser Editado</S.InfoText>    
            <S.InfoTextObs>Se precisar trocar o CPF do titular da unidade procure a administração</S.InfoTextObs>    

            <S.FieldInfo
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                editable={false}
                onChangeText={t=>setCpf(t)}
            />

            <S.Field
                placeholder="Digite seu Nome Completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <S.Field
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={t=>setEmail(t)}
            />

            <S.Field
                placeholder="Trocar a Senha"
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

            <S.ButtonArea onPress={handleEditButton}>
                <S.ButtonText>SALVAR ALTERAÇÕES</S.ButtonText>
            </S.ButtonArea>

            </S.Scroller>            
        </S.Container>
    );
};
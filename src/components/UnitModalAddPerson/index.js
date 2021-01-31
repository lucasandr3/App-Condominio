import React, {useState} from 'react';
import S from './style';

import DatePicker from 'react-native-date-picker';
import Api from '../../services/Api';

export default ({refreshFunction, setShowModal}) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());

    const handleAdd = async () => {
        if(name && date) {

            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+day : day;

            let birthdate = `${year}-${month}-${day}`;

            let result = await Api.AddUnitItem(
                'person',
                {
                    name,
                    birthdate
                }
            )

            if(result.error === '') {
                refreshFunction();
                setShowModal(false);
            } else {
                alert(result.error);
            }

        } else {
            alert('Preencha os campos.')
        }
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    return(
        <S.Box>
            <S.Title>Adicionar Novo Morador</S.Title>

            <S.Label>Nome Completo:</S.Label>
            <S.Field
                placeholder="Digite o nome completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <S.Label>Data de Nascimento:</S.Label>
            <DatePicker
                mode="date"
                date={date}
                onDateChange={setDate}
                locale="pt-BR"
            />

            <S.ButtonArea>
                <S.SaveButton title="Adicionar" onPress={handleAdd} />
                <S.CancelButton title="Cancelar" color="#FF0000" onPress={handleCancel} />
            </S.ButtonArea>
        </S.Box>
    )
}

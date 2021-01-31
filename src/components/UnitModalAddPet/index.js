import React, {useState} from 'react';
import S from './style';

import Api from '../../services/Api';

export default ({refreshFunction, setShowModal}) => {

    const [name, setName] = useState('');
    const [race, setRace] = useState('');

    const handleAdd = async () => {
        if(name && race) {

            let result = await Api.AddUnitItem(
                'pet',
                {
                    name, race
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
            <S.Title>Adicionar Pet</S.Title>

            <S.Label>Nome do Pet:</S.Label>
            <S.Field
                placeholder="Digite o nome do pet"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <S.Label>Raça do Pet:</S.Label>
            <S.Field
                placeholder="Digite a raça do pet"
                value={race}
                onChangeText={t=>setRace(t)}
            />

            <S.ButtonArea>
                <S.SaveButton title="Adicionar" onPress={handleAdd} />
                <S.CancelButton title="Cancelar" color="#FF0000" onPress={handleCancel} />
            </S.ButtonArea>
        </S.Box>
    )
}

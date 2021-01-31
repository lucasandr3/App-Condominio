import React, {useState} from 'react';
import S from './style';

import DatePicker from 'react-native-date-picker';
import Api from '../../services/Api';

export default ({refreshFunction, setShowModal}) => {

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [plate, setPlate] = useState('');

    const handleAdd = async () => {
        if(title && color && plate) {

            let result = await Api.AddUnitItem(
                'vehicle',
                {
                    title,
                    color,
                    plate
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
            <S.Title>Adicionar Novo Veículo</S.Title>

            <S.Label>Marca do Veículo:</S.Label>
            <S.Field
                placeholder="Digite a marca do veículo"
                value={title}
                onChangeText={t=>setTitle(t)}
            />

            <S.Label>Cor do Veículo:</S.Label>
            <S.Field
                placeholder="Digite a cor do veículo"
                value={color}
                onChangeText={t=>setColor(t)}
            />

            <S.Label>Placa do Veículo:</S.Label>
            <S.Field
                placeholder="Digite a placa do veículo"
                value={plate}
                onChangeText={t=>setPlate(t)}
            />


            <S.ButtonArea>
                <S.SaveButton title="Adicionar" onPress={handleAdd} />
                <S.CancelButton title="Cancelar" color="#FF0000" onPress={handleCancel} />
            </S.ButtonArea>
        </S.Box>
    )
}

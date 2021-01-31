import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchCamera } from 'react-native-image-picker';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState([]);
    const [description, setDescription] = useState('');
    const [where, setWhere] = useState('');

    useEffect(() => {
        handleAddPhoto();
    }, [])

    const handleAddPhoto = async () => {
        launchCamera({
            mediaType: 'photo',
            maxWidth: 1280
        }, (response) => {
            if(!response.didCancel) {
                setPhoto(response);
            }
        });
    }

    const handleSave = async () => {
        if(description !== '' && where !== '' && photo.uri !== '') {
            setLoading(true);
            let result = await Api.addLostItem(photo, description, where);
            setLoading(false);
            if(result.error === '') {
                setPhoto('');
                setDescription('');
                setWhere('');
                navigation.navigate('FoundAndLost');

            } else {
                alert(result.error)
            }

        } else {
            alert('Preencha os campos.')
        }
    }

    return(
        <S.Container>
            <S.Scroller>

                <S.PhotoArea>
                    {!photo.uri &&

                        <S.ButtonArea onPress={handleAddPhoto}>
                            <S.ButtonText>Tirar uma Foto</S.ButtonText>
                        </S.ButtonArea>
                    }

                    {photo.uri &&

                        <>
                            <S.Photo source={{uri: photo.uri}} resizeMode="cover" />
                            <S.ButtonArea onPress={handleAddPhoto}>
                                <S.ButtonText>Tirar outra foto</S.ButtonText>
                            </S.ButtonArea>
                        </>
                    }
                </S.PhotoArea>

                <S.Title>Descreva o item</S.Title>
                <S.Field
                    placeholder="Ex: Carteira de Couro"
                    value={description}
                    onChangeText={t=>setDescription(t)}
                />

                <S.Title>Onde foi encontrado ?</S.Title>
                <S.Field
                    placeholder="Ex: No pátio"
                    value={where}
                    onChangeText={t=>setWhere(t)}
                />

                <S.ButtonArea onPress={handleSave} style={{marginTop: 20, marginBottom: 40}}>
                    <S.ButtonText>Registrar</S.ButtonText>
                </S.ButtonArea>
            </S.Scroller>
                {loading &&
                    <S.LoadingArea>
                        <S.LoadingIcon size="large" color="#fff"/>
                    </S.LoadingArea>
                }
        </S.Container>
    );
};

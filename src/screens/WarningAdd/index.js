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

    const [warnText, setWarnText] = useState('');
    const [photoList, setPhotoList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAddPhoto = async () => {
        launchCamera({
            mediaType: 'photo',
            maxWidth: 1280
        }, async (response) => {
            if(!response.didCancel) {
                setLoading(true);
                let result = await Api.addWarningFile(response);
                setLoading(false);
                if(result.error === '') {
                    let list = [...photoList];
                    list.push(result.photo);
                    setPhotoList(list);
                } else {
                    alert(result.error)
                }
            }
        });
    }

    const handleDelPhoto = async (url) => {
        let list = [...photoList];
        list = list.filter(value=>value !== url);
        setPhotoList(list);
    }

    const handleSaveWarning = async () => {
        if(warnText !== '') {

            let result = await Api.addWarning(warnText, photoList);
            if(result.error === '') {

                navigation.navigate('Warning');

            } else {
                alert(result.error)
            }

        } else {
            alert('Descreva a ocorrência')
        }
    }

    return(
        <S.Container>
            <S.Scroller>
                <S.Title>Descreva a ocorrência</S.Title>
                <S.Field
                    placeholder="Ex: Vizinho X está com som alto"
                    value={warnText}
                    onChangeText={t=>setWarnText(t)}
                />

                <S.Title>Fotos Relacionadas</S.Title>
                <S.PhotoArea>
                    <S.PhotoScroll horizontal={true}>
                        <S.PhotoAddButton onPress={handleAddPhoto}>
                            <Icon name="camera" size={24} color={context.theme === 'light' ? '#000' : '#fff'} />
                        </S.PhotoAddButton>
                        {photoList.map((item, index)=>(
                            <S.PhotoItem key={index}>
                                <S.Photo source={{uri:item}} />
                                <S.PhotoRemoveButton onPress={()=>handleDelPhoto(item)}>
                                    <Icon name="remove" size={16} color="#ff6b6b" />
                                </S.PhotoRemoveButton>
                            </S.PhotoItem>
                        ))}
                    </S.PhotoScroll>
                </S.PhotoArea>

                {loading &&
                    <S.LoadingArea>
                        <S.LoadingIcon size="large" color={context.theme === 'light' ? '#000' : '#fff'}/>
                        <S.LoadText>Enviando Foto, Aguarde...</S.LoadText>
                    </S.LoadingArea>
                }

                <S.ButtonArea onPress={handleSaveWarning}>
                    <S.ButtonText>Registrar</S.ButtonText>
                </S.ButtonArea>
            </S.Scroller>
        </S.Container>
    );
};

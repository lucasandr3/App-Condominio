import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Modal} from 'react-native';
import { useStateValue } from '../../contexts/StateContext';

import {
    Container,
    HeaderArea,
    AreaTitle,
    DataCreate,
    Line,
    Name,
    Description,
    Stats,
    Stat,
    StatCount,
    StatusArea,
    StatusText,
    PhotosArea,
    PhotoItem,
    PhotoImage,
    ModalArea,
    ModalImage,
    ModalCloseButton,
} from './style';

const WarningItem = ({data}) => {

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const [context, dispatch] = useStateValue();

    const openModal = (img) => {
        setModalImage(img);
        setShowModal(true);
    }

    const handleBackModal = () => {
        setShowModal(false);
    }

  return (
    <Container>
        <HeaderArea>
            <AreaTitle>
                <Name>{data.title}</Name>
                <DataCreate>Data da ocorrência: {data.datecreated}</DataCreate>
            </AreaTitle>
        </HeaderArea>
        <Line/>
            <StatusArea>
                {data.status === 'IN_REVIEW' ?
                    <Icon name="exchange" size={20} color={context.theme === 'light' ? '#000' : '#fff'} />
                    :
                    <Icon name="check" size={20} color={context.theme === 'light' ? '#000' : '#fff'} />
                }
                <StatusText>
                    {data.status === 'IN_REVIEW' && 'Ocorrência em análise'}
                    {data.status === 'RESOLVED' && 'Resolvido'}
                </StatusText>
            </StatusArea>

        {/* <Description>{data.body}</Description> */}


            {data.photos.length > 0 &&
                <>
                <Line/>
                <PhotosArea>
                    {data.photos.map((item, index)=>(
                        <PhotoItem key={index} onPress={()=>openModal(item)}>
                            <PhotoImage source={{uri:item}} resizeMode="cover" />
                        </PhotoItem>
                    ))}
                </PhotosArea>
                </>
            }

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    handleBackModal();
                }}
            >
                <ModalArea>
                    <ModalImage source={{uri: modalImage}} resizeMode="contain" />
                    <ModalCloseButton onPress={()=>setShowModal(false)}>
                        <Icon name="long-arrow-left" size={30} color="#FFFFFF" />
                    </ModalCloseButton>
                </ModalArea>
            </Modal>
    </Container>
  );
}

export default WarningItem;

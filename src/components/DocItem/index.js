import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Linking} from 'react-native';

import { useStateValue } from '../../contexts/StateContext';

import Api from '../../services/Api';

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
} from './style';

const DocItem = ({data}) => {

    // const [likesCount, setLikesCount] = useState(data.likes);
    // const [liked, setLiked] = useState(data.liked);

    const [context, dispatch] = useStateValue();

    const handleClick = async () => {
        const supported = await Linking.canOpenURL(data.fileurl);
        if(supported) {
            Linking.openURL(data.fileurl);
        }
    }

  return (
    <Container>
        <HeaderArea>
            <Icon name="file-pdf-o" size={25} color={context.theme === 'light' ? '#000' : '#FFF'} />
            <AreaTitle>
                <Name>{data.title}</Name>
                {/* <DataCreate>Data do Aviso: {data.datecreated}</DataCreate> */}
            </AreaTitle>
        </HeaderArea>
        <Line/>
        {/* <Description>{data.body}</Description> */}

        <Stats>
            <Stat onPress={handleClick}>
                <Icon name="download" size={17} color={context.theme === 'light' ? '#000' : '#FFF'} />
                <StatCount>Baixar Documento</StatCount>
            </Stat>
        </Stats>
    </Container>
  );
}

export default DocItem;

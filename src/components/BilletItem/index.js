import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Linking} from 'react-native';

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

const BilletItem = ({data}) => {

    const handleClick = async () => {
        const supported = await Linking.canOpenURL(data.fileurl);
        if(supported) {
            Linking.openURL(data.fileurl);
        }
    }

  return (
    <Container>
        <HeaderArea>
            <Icon name="wpforms" size={25} color="#000" />
            <AreaTitle>
                <Name>{data.title}</Name>
                {/* <DataCreate>Data do Aviso: {data.datecreated}</DataCreate> */}
            </AreaTitle>
        </HeaderArea>
        <Line/>
        {/* <Description>{data.body}</Description> */}

        <Stats>
            <Stat onPress={handleClick}>
                <Icon name="download" size={17} color="#000" />
                <StatCount>Baixar Documento</StatCount>
            </Stat>
        </Stats>
    </Container>
  );
}

export default BilletItem;
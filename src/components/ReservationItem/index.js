import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Api from '../../services/Api';

import { 
    Container,
    Cover,
    ReservationArea,
    AreaTitle,
    AreaHours,
    DataCreate,
    Hours,
    Line,
    Name,
    Description,
    Stats,
    Stat,
    StatCount, 
} from './style';

const ReservationItem = ({data}) => {

  const navigation = useNavigation();  

  const handleClick = () => {
        navigation.navigate('ReservationAdd', {data});
  }  

  return (
    <Container onPress={handleClick}>
        <Cover source={{uri: data.cover}} resizeMode="cover"/>

        <ReservationArea>
            <AreaTitle>
                <Name>{data.title}</Name>
                <Line/>
                <DataCreate>Horário de Funcionamento:</DataCreate>
                {data.dates.map((item, index) => (
                    <AreaHours key={index}>
                        <Hours>{item}</Hours>
                    </AreaHours>
                ))}
            </AreaTitle>
        </ReservationArea>
    
        {/* <Description>{data.body}</Description> */}
{/* 
        <Stats>
            <Stat>
                <Icon name="download" size={17} color="#000" />
                <StatCount>Baixar Documento</StatCount>
            </Stat>
        </Stats> */}
    </Container>
  );
}

export default ReservationItem;
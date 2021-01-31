import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const WallItem = ({data}) => {

    const [likesCount, setLikesCount] = useState(data.likes);
    const [liked, setLiked] = useState(data.liked);

    const handleLike = async () => {
        setLiked(!liked);
        const result = await Api.likeWallPost(data.id)
        if(result.error === '') {
            setLikesCount(result.likes);
            setLiked(result.liked);
        } else {
            alert(result.error)
        }
    }

  return (
    <Container>
        <HeaderArea>
            {/* <Icon name="exclamation" size={25} color="#000" /> */}
            <AreaTitle>
                <Name>{data.title}</Name>
                <DataCreate>Data do Aviso: {data.datecreated}</DataCreate>
            </AreaTitle>
        </HeaderArea>
        <Line/>
        <Description>{data.body}</Description>

        <Stats>
            <Stat onPress={handleLike}>
                {liked ? 
                    <Icon name="heart" size={17} color="#ff6b6b" /> 
                    : 
                    <Icon name="heart-o" size={17} color="#ff6b6b" />
                }
                <StatCount>{likesCount} pessoa{likesCount === 1 ?'':'s'} curti{likesCount === 1 ?'u':'ram'}</StatCount>
            </Stat>
        </Stats>
    </Container>
  );
}

export default WallItem;
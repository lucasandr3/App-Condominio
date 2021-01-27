import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.card };
    border-width: 2px;
    border-color: #E8E9ED;
    border-radius: 15px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
`;

export const CoverImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 15px;
`;

export const InfoArea = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

export const InfoText = styled.Text`
    color: #9C9DB9;
`;

export const DataText = styled.Text`
    color: #000;
`;

export const ButtonItem = styled.TouchableOpacity`
    margin: 20px;
`;

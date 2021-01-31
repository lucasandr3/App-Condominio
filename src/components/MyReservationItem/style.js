import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.card };

    border-radius: 15px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
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
    color: ${({ theme }) => theme.text };
    margin-bottom: 5px;
`;

export const InfoText = styled.Text`
    color: ${({ theme }) => theme.subTitle };
`;

export const DataText = styled.Text`
    color: ${({ theme }) => theme.text };
    font-size: 11px;
`;

export const ButtonItem = styled.TouchableOpacity`
    margin: 20px;
`;

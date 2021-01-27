import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.card };
    margin-bottom: 15px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AreaTitle = styled.View`
    flex:1;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

export const DataCreate = styled.Text`
    font-size: 14px;
    color: #9C9DB9;
    margin-top: 8px;
`;

export const Line = styled.View`
    margin-top: 10px;
    margin-bottom: 5px;
    height: 2px;
    background-color:#f2f2f2;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 5,
})`
    color: #666;
    margin-top: 5px;
    line-height: 20px;
`;

export const Stats = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const Stat = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;

export const StatCount = styled.Text`
    margin-left: 6px;
`;

export const StatusArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;
export const StatusText = styled.Text`
    font-size: 14px;
    color: #9C9DB9;
    margin-left: 10px;
`;

export const PhotosArea = styled.View`
    flex-direction: row;
    margin-top: 13px;
`;
export const PhotoItem = styled.TouchableOpacity`
    margin-right: 10px;
`;
export const PhotoImage =styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
`;

export const ModalArea = styled.View`
    flex:1;
    background-color: #000;
`;
export const ModalImage = styled.Image`
    flex: 1;
`;

export const ModalCloseButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    left: 15px;

`;

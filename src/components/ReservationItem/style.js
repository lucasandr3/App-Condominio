import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    border-radius: 10px;
    background: ${({ theme }) => theme.card };
    margin-bottom: 15px;
`;

export const Cover = styled.Image`
    height: 200px;
    border-radius: 10px;
`;

export const ReservationArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`;

export const AreaTitle = styled.View`
    padding: 0 15px;
    flex:1;
`;

export const AreaHours = styled.View`

`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

export const DataCreate = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
    text-transform: uppercase;
`;

export const Hours = styled.Text`
    font-size: 13px;
    letter-spacing: 1px;
    color: #666E78;
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

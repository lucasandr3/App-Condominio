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
    margin-left: 15px;
    flex:1;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text };
`;

export const DataCreate = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.subTitle };
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
    color: ${({ theme }) => theme.textDesc };
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
    color: ${({ theme }) => theme.text };
`;

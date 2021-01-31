import styled from 'styled-components/native';

export default {
    Box: styled.SafeAreaView`
        width: 200px;
        border-radius: 5px;
        margin-right: 40px;
        background-color: ${({ theme }) => theme.card };
    `,
    Photo: styled.Image`
        height: 150px;
        border-radius: 5px;
    `,
    Title: styled.Text`
        font-size: 15px;
        color: ${({ theme }) => theme.text };
        margin: 10px;
        height: 50px;
    `,
    InfoTitle: styled.Text`
        font-weight: bold;
        color: ${({ theme }) => theme.subTitle };
        margin: 10px 10px 0 10px;
    `,
    InfoText: styled.Text`
        font-weight: bold;
        color: ${({ theme }) => theme.text };
        margin: 0 10px 10px 10px;
    `,
    MineButton: styled.TouchableOpacity`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #8B63E7;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
    `,
    MineButtonText: styled.Text`
        font-weight: bold;
        color: #fff;
        margin-left: 10px;
    `,
    LoadingIcon: styled.ActivityIndicator`

    `,
};

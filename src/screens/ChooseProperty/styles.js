import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.light };
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator`

    `,
    HeaderTitle: styled.Text`
        font-size: 16px;
        color: #000;
        text-align: center;
        margin-top: 10px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        align-items: center;
    `,
    ExitButtonArea: styled.TouchableOpacity`
        background-color: #000;
        padding: 15px;
        justify-content: center;
        align-items: center;
    `,
    ExitButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    `,
    PropertyList: styled.View`
        margin: 20px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #FFF;
        border-width: 2px;
        border-color: #E8E9ED;
        border-radius: 5px;
        padding: 15px;
        align-items: center;
        margin-bottom: 10px;
        flex-direction: row;
        align-items: center;
        justify-content: center
    `,
    ButtonText: styled.Text`
        color: #000;
        font-size: 15px;
        font-weight: bold;
        margin-left: 10px;
    `,
};

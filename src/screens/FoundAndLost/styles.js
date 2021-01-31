import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.light };
    `,
    Scroller: styled.ScrollView`
        flex: 1;
    `,
    LoadingIcon: styled.ActivityIndicator`

    `,
    Title: styled.Text`
        font-size: 17px;
        color: ${({ theme }) => theme.text };
        margin: 10px 20px;
    `,
    ProductScroller: styled.ScrollView`
        width: 100%;
        padding-left: 20px;
        margin-bottom: 20px
    `,
    AddButton: styled.TouchableOpacity`
        margin-right: 15px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        align-items: center;
    `,
    ExitButtonArea: styled.TouchableOpacity`
        background-color: #8863E6;
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
        border-radius: 20px;
        padding: 15px;
        align-items: center;
        margin-bottom: 10px;
    `,
    ButtonText: styled.Text`
        color: #000;
        font-size: 15px;
        font-weight: bold;
    `,
    NoDocs: styled.View`
        justify-content: center;
        align-items: center;
        padding: 30px;
    `,
    NoDocText: styled.Text`
        font-size: 15px;
        color: #000;
    `,
    NoDocImage: styled.Image`
        margin-top: 20px;
        width: 250px;
        height: 200px;
    `,
};

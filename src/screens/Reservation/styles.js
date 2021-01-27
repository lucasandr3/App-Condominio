import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.light };
    `,
    LoadingIcon: styled.ActivityIndicator`
      margin-top: 20px;
    `,
    List: styled.FlatList.attrs({
        contentContainerStyle: { paddingHorizontal: 20 },
        showsVerticalScrollIndicator: false,
    })`
        margin-top: 10px;
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
    Title: styled.Text`
        font-size: 17px;
        margin: 0 20px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #F5F6FA;
        padding: 12px;
        border: 2px solid #8863e6;
        border-radius: 5px;
        justify-content:center;
        align-items:center;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
    `,
    ButtonText: styled.Text`
        color: #8863e6;
        font-size: 17px;
        font-weight: bold;
    `,
};

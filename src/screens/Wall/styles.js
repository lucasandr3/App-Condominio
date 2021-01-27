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
    NoAlerts: styled.View`
        justify-content: center;
        align-items: center;
        padding: 30px;
    `,
    NoAlertText: styled.Text`
        font-size: 15px;
        color: #000;
    `,
    NoAlertImage: styled.Image`
        margin-top: 20px;
        width: 200px;
        height: 200px;
    `,
};

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
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 15px;
    `,
    InfoText: styled.Text`
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
        color: ${({ theme }) => theme.text };
    `,
    InfoTextObs: styled.Text`
        margin-bottom: 5px;
        font-size: 14px;
        color:${({ theme }) => theme.subTitle };
    `,
    FieldInfo: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #eee;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 15px;
        margin-top: 5px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #000;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    `,
};

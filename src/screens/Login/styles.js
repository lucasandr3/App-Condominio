import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        padding: 20px;
        background-color: ${({ theme }) => theme.light };
    `,
    Logo: styled.Image`
        width: 200px;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    `,
    TextLogo: styled.Text`
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        margin-bottom: 20px;
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

    SignMessageButton: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    `,

    SignMessageButtonText: styled.Text`
    font-size: 16px;
    color: #000;
    `,

    SignMessageButtonTextBold: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-left: 5px;
    `,

    LoadingArea: styled.View`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        justify-content: center;
        align-items: center;
    `,
    LoadingIcon: styled.ActivityIndicator``,
};

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
     PhotoArea: styled.View`
     /* margin-bottom: 30px; */
    `,
    Title: styled.Text`
        font-size: 17px;
        color: ${({ theme }) => theme.text };
        margin: 10px 0;
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        padding: 10px;
        /* margin-bottom: 15px; */
    `,

    Photo: styled.Image`
        height: 200px;
        border-radius: 5px;
        margin-bottom: 10px;
    `,
    PhotoRemoveButton: styled.TouchableOpacity``,
    ButtonArea: styled.TouchableOpacity`
        background-color: #000;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `,
    ButtonText: styled.Text`
        font-size: 17px;
        font-weight: bold;
        color: #FFF;
    `,
    LoadText: styled.Text`
        font-size: 15px;
        margin: 10px 0;
        color: ${({ theme }) => theme.text };
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

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
    Title: styled.Text`
        font-size: 17px;
        color: #000;
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
    PhotoArea: styled.View`
        margin-bottom: 30px;
    `,
    PhotoScroll: styled.ScrollView`
        flex: 1;
    `,
    PhotoAddButton: styled.TouchableOpacity`
        width: 65px;
        height: 65px;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #CCC;
        border-radius: 5px;
    `,
    PhotoItem: styled.View`
        width: 65px;
        border-width: 1px;
        border-color: #CCC;
        border-radius: 5px;
        padding-bottom: 5px;
        margin-left: 5px;
        align-items: center;
    `,
    Photo: styled.Image`
        width: 63px;
        height: 63px;
        margin-bottom: 5px;
        border-radius: 5px;
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
        color: #000;
    `,
    LoadingArea: styled.View`
        /* position: absolute; */
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    `,
    LoadingIcon: styled.ActivityIndicator`
        margin-right: 10px;
    `,
};

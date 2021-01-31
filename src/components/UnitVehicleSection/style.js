import styled from 'styled-components/native';

export default {

    Box: styled.View``,
    Item: styled.View`
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5px;
    `,
    InfoArea: styled.View`
        flex: 1;
    `,
    StrongText: styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: #000;
    `,
    RegularText: styled.Text`
        font-size: 14px;
        color: #9C9DB9;
    `,
    RemoveButton: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
    `,
};

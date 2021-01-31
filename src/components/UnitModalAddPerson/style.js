import styled from 'styled-components/native';

export default {
    Box: styled.View`
        padding: 20px;
    `,
    Title: styled.Text`
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    `,
    Label: styled.Text`
        font-size: 16px;
        color: #000;
        margin-bottom: 10px;
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
    ButtonArea: styled.View`
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
    `,
    SaveButton: styled.Button`
        flex: 1;
    `,
    CancelButton: styled.Button`
        flex: 1;
    `,
};

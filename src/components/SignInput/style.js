import styled from 'styled-components/native';

export default {
    InputArea: styled.View`
        width: 100%;
        height: 50px;
        background-color: #fff;
        flex-direction: row;
        border-radius: 5px;
        padding-left: 15px;
        align-items: center;
        margin-bottom: 15px;
        border-width: 1px;
        border-color: #CCC;
    `,
    Input: styled.TextInput`
        flex: 1;
        font-size: 16px;
        color: #373737;
        margin-left: 10px;
    `,
}
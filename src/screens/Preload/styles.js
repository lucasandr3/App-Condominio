import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    LoadingIcon: styled.ActivityIndicator`
        margin-top: 20px;
    `,
    LoadImage: styled.Image`
        width: 200px;
        height: 200px;
    `,
    Info: styled.Text`
        color: #555;
        font-size: 17px;
        margin-top: 5px; 
    `,
};
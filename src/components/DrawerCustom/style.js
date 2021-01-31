import styled from 'styled-components/native';

export default {
    DrawerArea: styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.light };
    `,

    DrawerLogoArea: styled.View`
        padding: 10px 10px;
        border-bottom-width: 1px;
        border-bottom-color: #EEE;
        flex-direction: row;
        align-items: center;
    `,

    DrawerLogo: styled.Image`
        width: 35px;
        height: 35px;
    `,

    DrawerScroller: styled.ScrollView`
        flex: 1;
        margin: 20px 0;
    `,

    ChangeUnitArea: styled.View`
        margin: 10px;
    `,

    ChangeUnitButton: styled.TouchableOpacity`
        background-color: #000;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `,

    ChangeUnitButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    `,

    FooterArea: styled.View`
        padding: 20px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,

    FooterInfo: styled.View`

    `,

    FooterProfile: styled.Text`
        font-size: 15px;
        color: ${({ theme }) => theme.text };
    `,

    FooterUnitText: styled.Text`
        font-size: 15px;
        font-weight: bold;
        color: ${({ theme }) => theme.text };
    `,

    FooterUnitButton: styled.TouchableOpacity`

    `,

    MenuButton: styled.TouchableOpacity`
        flex-direction: row;
        margin-bottom: 5px;
        border-radius: 0px;
        align-items: center;
        background-color: ${props=>props.active ? '#eee': 'transparent'};
    `,

    MenuSquare: styled.View`
        width: 5px;
        height: 35px;
        margin-right: 20px;
        background-color: ${props=>props.active ? '#000': 'transparent'};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    `,

    MenuButtonText: styled.Text`
        font-size: 15px;
        margin-left: 10px;
        color: ${props=>props.active ? '#000': '#666E78'};
    `,

    LogoText: styled.Text`
        font-size: 20px;
        font-weight: bold;
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
}

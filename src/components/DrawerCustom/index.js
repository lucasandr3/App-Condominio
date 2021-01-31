import React, {useState} from 'react';
import S from './style';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/Api';

export default (props) => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(false);

    const menus = [
        {title: 'Mural de Avisos', icon: 'newspaper-o', screen: 'Wall'},
        {title: 'Documentos', icon: 'folder', screen: 'Document'},
        {title: 'Reservas', icon: 'calendar-check-o', screen: 'Reservation'},
        {title: 'Livro de Ocorrências', icon: 'book', screen: 'Warning'},
        {title: 'Achados e Perdidos', icon: 'search', screen: 'FoundAndLost'},
        {title: 'Boletos', icon: 'wpforms', screen: 'Billet'},
        {title: 'Perfil', icon: 'user', screen: 'Profile'},
    ];

    const handleChangeUnit = async () => {
        await AsyncStorage.removeItem('property');
        navigation.reset({
            index: 1,
            routes: [{name: 'ChooseProperty'}]
        });
    }

    const handleLogoutButton = async () => {
        setLoading(true);
        await Api.logout();
        navigation.reset({
            index: 1,
            routes: [{name: 'Login'}]
        });
    }

    return (
        <S.DrawerArea>
            <S.DrawerLogoArea>
                {context.theme === 'light' ?
                    <S.DrawerLogo source={require('../../assets/appartments.png')}/>
                    :
                    <S.DrawerLogo source={require('../../assets/apartmentslight.png')}/>
                }
                <S.LogoText>Cond. Jardim Tropical</S.LogoText>
            </S.DrawerLogoArea>
            <S.DrawerScroller>
                {menus.map((item, index) => (
                    <S.MenuButton key={index} onPress={()=>navigation.navigate(item.screen)} active={props.state.routes[props.state.index].name === item.screen}>
                        <S.MenuSquare
                            active={props.state.routes[props.state.index].name === item.screen}
                        ></S.MenuSquare>
                        <Icon
                            name={item.icon}
                            size={20}
                            color={props.state.routes[props.state.index].name === item.screen ? context.theme === 'light' ? '#000': '#000': context.theme === 'dark' ? '#fff': '#666E78'}
                        />
                        <S.MenuButtonText
                            active={props.state.routes[props.state.index].name === item.screen}
                            style={{color: props.state.routes[props.state.index].name === item.screen ? context.theme === 'light' ? '#000': '#000': context.theme === 'dark' ? '#fff': '#666E78'}}
                        >{item.title}</S.MenuButtonText>
                    </S.MenuButton>
                ))}
                    <S.MenuButton onPress={handleLogoutButton}>
                        <S.MenuSquare></S.MenuSquare>
                        <Icon name="sign-out" size={20} color={context.theme === 'light' ? '#666E78' : '#fff'} />
                        <S.MenuButtonText
                            style={{color: context.theme === 'light' ? '#666E78' : '#fff'}}
                        >Sair</S.MenuButtonText>
                    </S.MenuButton>
                    {context.theme === 'light' &&
                        <S.MenuButton onPress={()=>dispatch({type:'setTheme', theme: 'dark'})}>
                            <S.MenuSquare></S.MenuSquare>
                            <Icon name="moon-o" size={20} color={context.theme === 'light' ? '#666E78' : '#fff'} />
                            <S.MenuButtonText
                                style={{color: context.theme === 'light' ? '#666E78' : '#fff'}}
                            >Tema Escuro</S.MenuButtonText>
                        </S.MenuButton>
                    }
                    {context.theme === 'dark' &&
                        <S.MenuButton onPress={()=>dispatch({type:'setTheme', theme: 'light'})}>
                            <S.MenuSquare></S.MenuSquare>
                            <Icon name="sun-o" size={20} color={context.theme === 'light' ? '#666E78' : '#fff'} />
                            <S.MenuButtonText
                                style={{color: context.theme === 'light' ? '#666E78' : '#fff'}}
                            >Tema Claro</S.MenuButtonText>
                        </S.MenuButton>
                    }

            </S.DrawerScroller>
            <S.ChangeUnitArea>
                <S.ChangeUnitButton onPress={handleChangeUnit}>
                    <S.ChangeUnitButtonText>Trocar Unidade</S.ChangeUnitButtonText>
                </S.ChangeUnitButton>
            </S.ChangeUnitArea>
            <S.FooterArea>
                <S.FooterInfo>
                    <S.FooterProfile numberOfLines={1}>{context.user.user.name}</S.FooterProfile>
                    <S.FooterUnitText>{context.user.property.name}</S.FooterUnitText>
                </S.FooterInfo>
                <S.FooterUnitButton onPress={() => navigation.navigate('Unit')}>
                    <Icon name="cog" size={24} color={context.theme === 'light' ? '#666E78' : '#fff'} />
                </S.FooterUnitButton>
            </S.FooterArea>
            {loading &&
                <S.LoadingArea>
                    <S.LoadingIcon size="large" color="#FFF"/>
                </S.LoadingArea>
            }
        </S.DrawerArea>
    );
}

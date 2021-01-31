import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useStateValue} from '../contexts/StateContext';

import DrawerCustom from '../components/DrawerCustom';
import Wall from '../screens/Wall';
import Document from '../screens/Document';
import FoundAndLost from '../screens/FoundAndLost';
import FoundAndLostAdd from '../screens/FoundAndLostAdd';
import Profile from '../screens/Profile';
import Reservation from '../screens/Reservation';
import ReservationAdd from '../screens/ReservationAdd';
import ReservationMy from '../screens/ReservationMy';
import Warning from '../screens/Warning';
import WarningAdd from '../screens/WarningAdd';
import Billet from '../screens/Billet';
import Unit from '../screens/Unit';

const Drawer = createDrawerNavigator();

export default () => {

    const [context, dispatch] = useStateValue();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerCustom {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: context.theme === 'light' ? '#F5F9FA' : '#121212',
                    shadowOpacity: 0,
                    elevation: 0
                },
                headerTintColor: context.theme === 'light' ? '#121212' : '#F5F9FA'
            }}
        >
            <Drawer.Screen name="Wall" component={Wall} options={{headerShown:true, title: 'Mural de Avisos'}} />
            <Drawer.Screen name="Document" component={Document} options={{headerShown:true, title: 'Documentos'}} />
            <Drawer.Screen name="FoundAndLost" component={FoundAndLost} options={{headerShown:true, title: 'Achados e Perdidos'}} />
            <Drawer.Screen name="FoundAndLostAdd" component={FoundAndLostAdd} options={{headerShown:true, title: 'Novo Registro'}} />
            <Drawer.Screen name="Profile" component={Profile} options={{headerShown:true, title: 'Meus Dados'}} />
            <Drawer.Screen name="Reservation" component={Reservation} options={{headerShown:true, title: 'Reservas Disponíveis'}} />
            <Drawer.Screen name="ReservationAdd" component={ReservationAdd} options={{headerShown:true, title: 'Nova Reserva'}} />
            <Drawer.Screen name="ReservationMy" component={ReservationMy} options={{headerShown:true, title: 'Minhas Reservas'}} />
            <Drawer.Screen name="Warning" component={Warning} options={{headerShown:true, title: 'Livre de Ocorrências'}} />
            <Drawer.Screen name="WarningAdd" component={WarningAdd} options={{headerShown:true, title: 'Registrar Ocorrência'}} />
            <Drawer.Screen name="Billet" component={Billet} options={{headerShown:true, title: 'Boletos'}} />
            <Drawer.Screen name="Unit" component={Unit} options={{headerShown:true}} />
        </Drawer.Navigator>
    );
}

import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import S from './styles';

import {useStateValue} from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WallItem from '../../components/WallItem';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => { 
      getAlerts();
  }, []);

  const getAlerts = async () => {
    setAlerts([]);
    setLoading(true);
    let result = await Api.getAlerts();
    setLoading(false);
    if(result.error === '') {
        setAlerts(result.list);
    } else {
        alert(result.error)
    }
  }

  return (
    <S.Container>
        {!loading && alerts.length === 0 &&
            <S.NoAlerts>
                <S.NoAlertText>Não há Avisos para mostrar.</S.NoAlertText>
                <S.NoAlertImage source={require('../../assets/noWall.png')} />
            </S.NoAlerts>
        }
        <S.List
          keyboardShouldPersistTaps="handled"
          data={alerts}
          onRefresh={getAlerts}
          refreshing={loading}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <WallItem data={item} />}
        />
      
    </S.Container>
  );
};

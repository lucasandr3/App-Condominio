import React, {useState, useEffect, useRef} from 'react';
import {useNavigation , useRoute} from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import S from './styles';

import {useStateValue} from '../../contexts/StateContext';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const scroll = useRef();
  const navigation = useNavigation();
  const route = useRoute();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [loadingTimes, setLoadingTimes] = useState(true);
  const [loadingReq, setLoadingReq] = useState(false);
  const [disabledDates, setDisabledDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.setOptions({
                headerTitle: `Reservar ${route.params.data.title}`
            });
        });
        getDisabledDays();
        return unsubscribe;
  }, [navigation, route]);

  useEffect(() => {
      getTimes();
  }, [selectedDate])

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const getDisabledDays = async () => {
    setDisabledDates([]);
    setTimeList([]);
    setSelectedDate(null);
    setSelectedTime(null);
    setLoading(true);
    const result = await Api.getDisabledDates(route.params.data.id);
    setLoading(false);
    if(result.error === '') {

        let dateList = [];
        for (let i in result.list) {
            dateList.push(new Date(result.list[i]));
        }
        setDisabledDates(dateList);

    } else {
        alert(result.error)
    }
  }

  const getTimes = async () => {
      if(selectedDate) {
        setTimeList([]);
        setLoadingTimes(true);
        setLoadingReq(true);
        const result = await Api.getReservationTimes(route.params.data.id, selectedDate);
        setLoadingTimes(false);
        if(result.error === '') {
            setSelectedTime(null);
            setTimeList(result.list);
            setTimeout(()=> {
                scroll.current.scrollToEnd();
                setLoadingReq(false);
            }, 500)
        } else {
            alert(result.error)
        }
      }
  }

  const handleSave = async () => {
      if(selectedDate && selectedTime) {
        setLoadingReq(true);
        const result = await Api.setReservation(
            route.params.data.id,
            selectedDate,
            selectedTime
        );
        setLoadingReq(false);
        if(result.error === '') {
            navigation.navigate('ReservationMy');
        } else {
            alert(result.error)
        }
      } else {
          alert('Selecione Data e Horário.')
      }
  }

  const handleDateChange = (date) => {
    let dateEl = new Date(date);
    let year = dateEl.getFullYear();
    let month = dateEl.getMonth() + 1;
    let day = dateEl.getDate();

    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    setSelectedDate(`${year}-${month}-${day}`);
  }

  const showTextDate = (date) => {
    let dateEl = new Date(date);
    let year = dateEl.getFullYear();
    let month = dateEl.getMonth() + 1;
    let day = dateEl.getDate();

    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;

    return `${day}/${month}/${year}`;
  }

  return (
    <S.Container>
        <S.Scroller ref={scroll} contentContainerStyle={{paddingBottom: 40}}>
            <S.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" />

            {loading &&
                <S.LoadingIcon size="large" color="#000" />
            }

            {!loading &&
                <S.CalendarArea>
                    <CalendarPicker
                        onDateChange={handleDateChange}
                        disabledDates={disabledDates}
                        minDate={minDate}
                        maxDate={maxDate}
                        weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        previousTitle="Anterior"
                        nextTitle="Próximo"
                        selectedDayColor="#8863E6"
                        selectedDayTextColor="#FFFFFF"
                        todayBackgroundColor="transparent"
                        todayTextStyle="#ff0000"
                        previousTitleStyle={{color: context.theme === 'light' ? '#000000' : '#ffffff'}}
                        nextTitleStyle={{color: context.theme === 'light' ? '#000000' : '#ffffff'}}
                        selectedDisabledDatesTextStyle={{color: context.theme === 'light' ? '#999' : '#ccc'}}
                    />
                </S.CalendarArea>
            }

            {!loading && selectedDate &&
                <>
                    <S.Title>Horários disponíveis em {showTextDate(selectedDate)}</S.Title>
                    <S.TimeListArea>
                        {loadingTimes &&
                            <S.LoadingIcon size="large" color={context.theme === 'light' ? '#000000' : '#ffffff'} />
                        }
                        {timeList.map((item, index) => (
                            <S.TimeItem
                                key={index}
                                onPress={()=>setSelectedTime(item.id)}
                                active={selectedTime === item.id}
                            >
                                <S.TimeItemText
                                    active={selectedTime === item.id}
                                >{item.title}</S.TimeItemText>
                            </S.TimeItem>
                        ))}
                    </S.TimeListArea>
                </>
            }

        </S.Scroller>
        {!loading &&
            <S.ButtonArea onPress={handleSave}>
                <S.ButtonText>Confirmar Reserva</S.ButtonText>
            </S.ButtonArea>
        }
        {loadingReq &&
            <S.LoadingArea>
                <S.LoadingIconReq size="large" color="#FFF"/>
            </S.LoadingArea>
        }
    </S.Container>
    );
};

import React, {useState, useEffect, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import S from './styles';

import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome';

import UnitPeopleSection from '../../components/UnitPeopleSection';
import UnitVehicleSection from '../../components/UnitVehicleSection';
import UnitPetSection from '../../components/UnitPetSection';
import UnitModalAddPerson from '../../components/UnitModalAddPerson';
import UnitModalAddVehicle from '../../components/UnitModalAddVehicle';
import UnitModalAddPet from '../../components/UnitModalAddPet';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [peopleList, setPeopleList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [petList, setPetList] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Unidade ${context.user.property.name}`
        });
    }, []);

    useEffect(() => {
        getUnitInfo();
    }, []);

    const getUnitInfo = async () => {
        setLoading(true);
        let result = await Api.getUnitInfo();
        setLoading(false);
        if(result.error === '') {
            setPeopleList(result.peoples);
            setVehicleList(result.vehicles);
            setPetList(result.pets);
        } else {
            alert(result.error)
        }
    }

    const handleAdd = (type) => {
        setModalType(type);
        setShowModal(true);
    }

    return(
        <S.Container>
            <S.Scroller>
                {loading &&
                    <S.LoadingIcon color="#000" size="large" />
                }
                {!loading &&
                    <>
                        <S.TitleArea>
                            <S.Title>Moradores</S.Title>
                            <S.AddButton onPress={()=>handleAdd('person')}>
                                <Icon name="plus" size={24} color="#000" />
                            </S.AddButton>
                        </S.TitleArea>
                        <S.ListArea>
                            <UnitPeopleSection
                                list={peopleList}
                                refreshFunction={getUnitInfo}
                            />
                        </S.ListArea>

                        <S.TitleArea>
                            <S.Title>Veículos</S.Title>
                            <S.AddButton onPress={()=>handleAdd('vehicle')}>
                                <Icon name="plus" size={24} color="#000" />
                            </S.AddButton>
                        </S.TitleArea>
                        <S.ListArea>
                            <UnitVehicleSection
                                list={vehicleList}
                                refreshFunction={getUnitInfo}
                            />
                        </S.ListArea>

                        <S.TitleArea>
                            <S.Title>Pets</S.Title>
                            <S.AddButton onPress={()=>handleAdd('pet')}>
                                <Icon name="plus" size={24} color="#000" />
                            </S.AddButton>
                        </S.TitleArea>
                        <S.ListArea>
                            <UnitPetSection
                                list={petList}
                                refreshFunction={getUnitInfo}
                            />
                        </S.ListArea>
                    </>
                }
            </S.Scroller>

            <S.ModalArea
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={()=>setShowModal(false)}
            >
                <S.ModalBg>
                    <S.ModalBody>
                        {modalType === 'person' &&
                            <UnitModalAddPerson
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }

                        {modalType === 'vehicle' &&
                            <UnitModalAddVehicle
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }

                        {modalType === 'pet' &&
                            <UnitModalAddPet
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }
                    </S.ModalBody>
                </S.ModalBg>

            </S.ModalArea>

        </S.Container>
    );
};

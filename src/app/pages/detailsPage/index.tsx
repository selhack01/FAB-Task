import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import stylesheet from './stylesheet';

const FAKE_API_URL = 'https://fakeapi.nibgat.space/member?id=';

const DetailsPage = ({ route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setData] = useState({});
    const { id } = route.params;

    useEffect(() => {
        getUserDatas(id);
    }, []);

    const getUserDatas = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch(FAKE_API_URL + id);
            if (!response.ok) {
                console.log('Sunucu hatası');
                return;
            }
            const userData = await response.json();
            setData(userData);
        } catch (error) {
            console.error('Hata:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderLoading = () => {
        if (!isLoading) {
            return null;
        }

        return <Text>Yükleniyor...</Text>;
    };

    const renderUserData = () => {
        if (isLoading) {
            return null;
        }

        const formattedDate = moment(userData.createdAt)
            .locale('tr')
            .format('LLL');

        return (
            <View>
                <Image source={{ uri: userData.profilePhotoURL }} style={stylesheet.img} />
                <View style={stylesheet.datas}>
                    <Text style={stylesheet.text}>Fulname: {userData.fullName}</Text>
                    <Text style={stylesheet.text}>Age: {userData.age}</Text>
                    <Text style={stylesheet.text}>ID: {userData.id}</Text>
                    <Text style={stylesheet.text}>Created Time: {formattedDate}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={stylesheet.container}>
            {renderLoading()}
            {renderUserData()}
        </View>
    );
};

export default DetailsPage;

import React, { useState } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import stylesheet from './stylesheet';
import { Card } from '../../components';

const FAKE_API_URL = 'https://fakeapi.nibgat.space/members';

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const getUserDatas = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(FAKE_API_URL);
            if (!response.ok) {
                console.log('Sunucu hatası');
                return;
            }
            const data = await response.json();
            setData(data);
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

    const renderUserCards = () => {
        if (isLoading) {
            return null;
        }

        return (
            <ScrollView>
                {data.map((item) => (
                    <Card
                        id={item.id}
                        imgUrl={item.profilePhotoURL}
                        fullname={item.fullName}
                        age={item.age}
                        key={item.id}
                    />
                ))}
            </ScrollView>
        );
    };

    const renderLoadDataButton = () => {
        if (data.length || isLoading) {
            return null;
        }

        return <Button title="Verileri Yükle" onPress={getUserDatas} />;
    };

    return (
        <View style={stylesheet.container}>
            {renderLoadDataButton()}
            {renderLoading()}
            {renderUserCards()}
        </View>
    );
};

export default MainPage;

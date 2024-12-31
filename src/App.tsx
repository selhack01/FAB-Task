import React, { useState } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import stylesheet from './stylesheet';
import { Card } from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const url = 'https://fakeapi.nibgat.space/members';

  const get = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
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

  return (
    <View style={stylesheet.container}>
      {!isLoading && !data.length ? (
        <Button title="Verileri Yükle" onPress={get} />
      ) : null}

      {isLoading ? (
        <Text>Yükleniyor...</Text>
      ) : (
        <ScrollView>
          {data.map((item) => (
            <Card
              key={item.id}
              imgUrl={item.profilePhotoURL}
              fullname={item.fullName}
              age={item.age}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default App;

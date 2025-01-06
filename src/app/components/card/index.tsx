import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import stylesheet from './stylesheet';
import { useNavigation } from '@react-navigation/native';

const Card = ({ imgUrl, fullname, age, id }: any) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={stylesheet.card}
            onPress={() => navigation.navigate("Details", { id })}
        >
            <Image source={{ uri: imgUrl }} style={stylesheet.cardImage} />
            <View style={stylesheet.cardSection}>
                <Text style={stylesheet.text}>Full Name: {fullname}</Text>
                <Text style={stylesheet.text}>Age: {age}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

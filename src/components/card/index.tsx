import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import stylesheet from './stylesheet';

const Card = ({ imgUrl, fullname, age, }: any) => {
    return <View style={stylesheet.card}>
        <Image source={{ uri: imgUrl }}
            style={stylesheet.cardImage}
        />
        <View style={stylesheet.cardSection}>
            <Text style={stylesheet.text}>
                Full Name: {fullname}
            </Text>
            <Text style={stylesheet.text}>
                Age: {age}
            </Text>
        </View>
    </View>
};


export default Card;

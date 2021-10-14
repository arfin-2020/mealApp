import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color'

export const CustomHeaderBtn = (props) =>{
        return (
            <Icon name="star-outline" size={30} color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
        )
}

export const StarComponent = (props) =>{
    return (
        <Icon name="star-sharp" size={30}  color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
    )
}
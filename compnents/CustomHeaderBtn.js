import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color'

export const CustomHeaderBtn = () =>{
        return (
            <Icon name="star-outline" size={30} color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
        )
}

export const StarComponent = () =>{
    // console.log(props)
    return (
        <Icon 
        name="star-sharp" 
        size={30}  
        color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
    )
}
export const MenuComponent = () =>{
    return (
        <Icon style={{marginLeft:15}} 
        name="md-menu-sharp" 
        size={30}  
        color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
    )
}
export const SaveIcon = () =>{
    return (
        <Icon style={{marginRight:15}} 
        name="md-save-outline" 
        size={25}  
        color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
    )
}
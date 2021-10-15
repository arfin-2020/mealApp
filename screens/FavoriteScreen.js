import React from 'react';
import {TouchableOpacity} from "react-native";
import {  MEALS } from '../data/dummy-data';
import MealList from '../compnents/MealList';
import { MenuComponent } from '../compnents/CustomHeaderBtn';

const FavoriteScreen = (props) =>{
    const FavMeal = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    return <MealList listData={FavMeal} navigation={props.navigation}/>
}


FavoriteScreen.navigationOptions = (navData) => {

    return {
        headerTitle: 'Your Favorites',
        headerLeft: ()=>(
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer()}}>
            <MenuComponent/>
            </TouchableOpacity>
        )
       
    }
}



export default FavoriteScreen;
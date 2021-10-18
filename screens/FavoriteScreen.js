import React from 'react';
import {TouchableOpacity} from "react-native";
// import {  MEALS } from '../data/dummy-data';
import MealList from '../compnents/MealList';
import { MenuComponent } from '../compnents/CustomHeaderBtn';
import { useSelector } from 'react-redux';

const FavoriteScreen = (props) =>{
    const favMeals =  useSelector(state =>state.meals.favoriteMeals);
    // const FavMeal = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    return <MealList listData={favMeals} navigation={props.navigation}/>
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
import React from 'react';
import {  MEALS } from '../data/dummy-data';
import MealList from '../compnents/MealList';

const FavoriteScreen = (props) =>{
    const FavMeal = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    return <MealList listData={FavMeal} navigation={props.navigation}/>
}

FavoriteScreen.navigationOptions={
    headerTitle:'Your Favorites'
};
// const styles = StyleSheet.create({
    
// })


export default FavoriteScreen;
import React from 'react';
import MealList from '../compnents/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoriMealScreen = (props) => {

    
    // console.log("categoryId==============",categoryId)
    // const selectedCategory = CATEGORIES.find(category =>category.id === categoryId);
    // console.log("selected Category", selectedCategory);

    
    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}

CategoriMealScreen.navigationOptions = (navigationData) => {
    // console.log(navigationData);
    const categoryId = navigationData.navigation.getParam('categoryId');
    // console.log(categoryId)
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
        // headerStyle:{
        //     backgroundColor:Platform.OS === 'android' ? selectedCategory.color : 'black'

        // },
    };

}




export default CategoriMealScreen;
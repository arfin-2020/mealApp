

import { Platform } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Color from '../constant/Color';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriMealScreen from '../screens/CategoriMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';



const MealsNavigator =  createStackNavigator ({
        Catagories: {
            screen: CategoriesScreen,
        },
        CategoryMeals:{
            screen: CategoriMealScreen,
        },
        MealDetail: MealDetailsScreen
},
{ 
    // mode:'modal',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'black'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor,
        // headerTitle:'A screen'
    }
});


const mealFavTabNavigator = createBottomTabNavigator({
    Meals:MealsNavigator,
    favorites: FavoriteScreen
});

export default createAppContainer(mealFavTabNavigator);




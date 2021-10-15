
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Color from '../constant/Color';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriMealScreen from '../screens/CategoriMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FilterScreen from '../screens/FilterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';



const defaultNavOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
        // headerTitle:'A screen'
    }


const MealsNavigator = createStackNavigator({
    Catagories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoriMealScreen,
    },
    MealDetail: MealDetailsScreen
},
    {
        // mode:'modal',
        defaultNavigationOptions: defaultNavOptions
    });

const FavoritesStackNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    mealDetails: MealDetailsScreen,
},
{
    defaultNavigationOptions:defaultNavOptions
}
)

const tabScreenConfig =  {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                    name="restaurant"
                    size={25}
                    color={Platform.OS === 'android' ? tabInfo.tintColor : Color.primaryColor} 
                    />
                )
            },
            tabBarColor: Color.primaryColor
        }
    },

    favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!!',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={25}
                    color={Platform.OS === 'android' ? tabInfo.tintColor : Color.primaryColor} 
                    />
                )
            },
            tabBarColor: Color.secondaryColor
        }
    },
}

const mealFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig,{
            activeColor: 'white',
            shifting : true,
            // barStyle:{
            //     backgroundColor: '#4a148c'
            // }
            
        })
        : createBottomTabNavigator(
            tabScreenConfig , {
            tabBarOptions: {
                activeTintColor: Color.accentColor,
            }
        });


        const filterStackNavigator = createStackNavigator({
            Filter:FilterScreen,
         
        },)

        const MainNavigator = createDrawerNavigator({
            screen: mealFavTabNavigator,
            Filter:filterStackNavigator
        })

export default createAppContainer(MainNavigator);




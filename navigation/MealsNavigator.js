
import React from 'react';
import { Platform, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Color from '../constant/Color';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriMealScreen from '../screens/CategoriMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';



const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'black'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
    // headerTitle:'A screen'
    headerTitleStyle:{
        fontFamily:'OpenSans-Regular'
    },
    headerBackTitleStyle:{
        fontFamily:'OpenSans-Bold'
    }
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
        defaultNavigationOptions: defaultNavOptions
    }
)

const tabScreenConfig = {
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
            
            tabBarColor: Color.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text>Meals</Text> : 'Meals',
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
            tabBarColor: Color.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text>Favorites</Text> : 'Favorites',
        }
    },
}

const mealFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            // barStyle:{
            //     backgroundColor: '#4a148c'
            // }

        })
        : createBottomTabNavigator(
            tabScreenConfig, {
            tabBarOptions: {
                labelStyle:{
                    fontFamily:'OpenSans-Bold'
                },
                activeTintColor: Color.accentColor,
            }
        });


        const filterStackNavigator = createStackNavigator({
            Filter:  FilterScreen,
        },
        {
            // navigationOptions: {
            //     drawerLabel: 'Filter!!'
            // },
            defaultNavigationOptions: defaultNavOptions
        });

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: mealFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        },
    },
    Filter: filterStackNavigator,

},
{
    contentOptions:{
        activeTintColor: Color.accentColor,
        labelStyle:{
            fontFamily: 'OpenSans-Bold',
        }
    }
});

export default createAppContainer(MainNavigator);




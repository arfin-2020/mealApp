
import {Platform} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriMealScreen from '../screens/CategoriMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Color from '../constant/Color';




const MealsNavigator =  createStackNavigator ({
        Catagories: {
            screen: CategoriesScreen,
            navigationOptions:{
                headerTitle:'Meal Categories'
            }
        },
        CategoryMeals:{
            screen: CategoriMealScreen,
        },
        MealDetail: MealDetailsScreen
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'black'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor ,
        headerTitle:'A screen'
    }
});

export default createAppContainer(MealsNavigator);




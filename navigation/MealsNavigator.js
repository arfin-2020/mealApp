import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriMealScreen from '../screens/CategoriMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';





const MealsNavigator =  createStackNavigator ({
        Catagories: CategoriesScreen,
        CategoryMeals:{
            screen: CategoriMealScreen
        },
        MealDetail: MealDetailsScreen
});

export default createAppContainer(MealsNavigator);




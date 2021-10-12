import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constant/Color';


const CategoriMealScreen = (props) =>{
    const categoryId = props.navigation.getParam('categoryId');
    // console.log("categoryId==============",categoryId)

    const selectedCategory = CATEGORIES.find(category =>category.id === categoryId);
    // console.log("selected Category", selectedCategory);
    return (
        <View style={styles.screen}>
            <Text>Hey This is CategoriMeal Screen </Text>
            <Text>{selectedCategory.title} </Text>
            <Button title="Go to MealDetail" onPress={()=>props.navigation.navigate('MealDetail')}/>
            <Button title="Go to Meal" onPress={()=>props.navigation.pop()}/>
        </View>
    )
}
CategoriMealScreen.navigationOptions = (navigationData) => {
    // console.log(navigationData);
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category =>category.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'black'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor ,
    };
   
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})


export default CategoriMealScreen;
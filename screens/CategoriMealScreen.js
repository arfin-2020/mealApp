import React from 'react';
import { StyleSheet, Text, View, Button,Platform  } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


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
    // console.log(categoryId)
    const selectedCategory = CATEGORIES.find(category =>category.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
        // headerStyle:{
        //     backgroundColor:Platform.OS === 'android' ? selectedCategory.color : 'black'
           
        // },
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
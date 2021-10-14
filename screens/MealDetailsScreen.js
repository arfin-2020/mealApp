import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {MEALS} from '../data/dummy-data'


const MealDetailsScreen = (props) =>{
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
    //  console.log('id--------',selectedMeal)
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title} </Text>
            <Button title="mealDetail screen" onPress={()=>props.navigation.popToTop()}/>
        </View>
    )
}


MealDetailsScreen.navigationOptions = (navigateData)=>{
    const mealId = navigateData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: ()=><Text style={{color:'white'}}>fav</Text>
    }
}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default MealDetailsScreen;
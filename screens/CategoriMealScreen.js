import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const CategoriMealScreen = (props) =>{
    return (
        <View style={styles.screen}>
            <Text>Hey This is CategoriMeal Screen </Text>
            <Button title="Go to MealDetail" onPress={()=>props.navigation.navigate('MealDetail')}/>
            <Button title="Go to Meal" onPress={()=>props.navigation.pop()}/>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default CategoriMealScreen;
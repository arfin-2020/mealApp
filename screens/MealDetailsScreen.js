import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';



const MealDetailsScreen = (props) =>{
    return (
        <View style={styles.screen}>
            <Text>Hey This is MealDetailsScreen Screen </Text>
            <Button title="mealDetail screen" onPress={()=>props.navigation.popToTop()}/>
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


export default MealDetailsScreen;
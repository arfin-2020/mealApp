import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native' ;
import MealItem from './MealItem';
import { useSelector } from 'react-redux';


const MealList = (props) =>{
    const favoriteMeals = useSelector(state =>state.meals.favoriteMeals);
    
    const renderMealItem = (itemData) => {
        const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return <MealItem title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{
            props.navigation.navigate('MealDetail',
            {
                mealId:itemData.item.id,
                mealTitle:itemData.item.title,
                currentMealIsFavorite: isFav,
            })}}/>
        
    }
    return(
        <View style={styles.list}>
            <FlatList 
            data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%', padding:10}}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MealList;
import React from 'react';
import { StyleSheet, Text, View, Button, Platform, FlatList } from 'react-native';
import MealItem from '../compnents/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoriMealScreen = (props) => {

    
    // console.log("categoryId==============",categoryId)
    // const selectedCategory = CATEGORIES.find(category =>category.id === categoryId);
    // console.log("selected Category", selectedCategory);

    const renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{}}/>
        
    }
    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <View style={styles.screen}>
            {/* <Text>Hey This is CategoriMeal Screen </Text>
            <Text>{selectedCategory.title} </Text>
            <Button title="Go to MealDetail" onPress={()=>props.navigation.navigate('MealDetail')}/>
            <Button title="Go to Meal" onPress={()=>props.navigation.pop()}/> */}
            <FlatList data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%', padding:10}}
            />
        </View>

    )
}

CategoriMealScreen.navigationOptions = (navigationData) => {
    // console.log(navigationData);
    const categoryId = navigationData.navigation.getParam('categoryId');
    // console.log(categoryId)
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
        // headerStyle:{
        //     backgroundColor:Platform.OS === 'android' ? selectedCategory.color : 'black'

        // },
    };

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        margin: 10,
    }
})


export default CategoriMealScreen;
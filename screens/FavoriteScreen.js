import React from 'react';
import {TouchableOpacity,View, Text,StyleSheet} from "react-native";
// import {  MEALS } from '../data/dummy-data';
import MealList from '../compnents/MealList';
import { MenuComponent } from '../compnents/CustomHeaderBtn';
import { useSelector } from 'react-redux';

const FavoriteScreen = (props) =>{
    const favMeals =  useSelector(state =>state.meals.favoriteMeals);
    // const FavMeal = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
                <Text style={styles.textStyle}>No favorite meals found. Start adding some!!</Text>
            </View>
        )
    }
    return <MealList listData={favMeals} navigation={props.navigation}/>
}


FavoriteScreen.navigationOptions = (navData) => {

    return {
        headerTitle: 'Your Favorites',
        headerLeft: ()=>(
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer()}}>
            <MenuComponent/>
            </TouchableOpacity>
        )
       
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'red',
    },
    textStyle:{
        color:'red',
        fontFamily:'OpenSans-Bold',
        
    }
})

export default FavoriteScreen;
import React from 'react';
import { StyleSheet, FlatList, Touchable  } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CatgegoryGridTiles from '../compnents/CategoryGridTiles';
import { MenuComponent } from '../compnents/CustomHeaderBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';




const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
           <CatgegoryGridTiles title={itemData.item.title} color={itemData.item.color}
           onSelect={()=>
            props.navigation.navigate(
            'CategoryMeals',{categoryId:itemData.item.id}, 
            )}
           />
        )
    
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}
CategoriesScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Meal Categories',
        headerLeft: ()=>(
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer();}}>
            <MenuComponent/>
            </TouchableOpacity>
        )
       
    }
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
})


export default CategoriesScreen;
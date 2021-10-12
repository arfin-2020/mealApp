import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';



const renderGridItem = (itemData) => {
    return <View style={styles.gridItem}>
        <Text style={styles.textStyle}>{itemData.item.title}</Text>
    </View>
}


const CategoriesScreen = (props) => {
    return (
        <FlatList 
        keyExtractor = {(item,index)=>item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} 
        />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        
    },
    textStyle:{
        color:'black',
    }
})


export default CategoriesScreen;
import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    FlatList,
    Platform    } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import  Color from '../constant/Color'





const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
            style={styles.gridItem}
             onPress={()=>props.navigation.navigate(
                 'CategoryMeals',{categoryId:itemData.item.id}
                 )}>
                <View>
                    <Text style={styles.textStyle}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'black'
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor ,
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,

    },
    textStyle: {
        color: 'black',
    }
})


export default CategoriesScreen;
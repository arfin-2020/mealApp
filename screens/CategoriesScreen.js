import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    FlatList  } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';






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
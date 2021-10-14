import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../compnents/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomHeaderBtn, StarComponent } from '../compnents/CustomHeaderBtn';


const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    //  console.log('id--------',selectedMeal)
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title} </Text>
            <Button title="mealDetail screen" onPress={() => props.navigation.popToTop()} />
        </View>
    )
}


MealDetailsScreen.navigationOptions = (navigateData) => {
    const mealId = navigateData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { console.log('mark as you favorite food!!!') }}>
                    <StarComponent />
                    <CustomHeaderBtn />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <CustomHeaderBtn />
                </TouchableOpacity> */}
            </View>


    }
}

// <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     <Item title='favorite' 
//     iconName='heart-sharp' 
//     onPress={()=>console.log('add to favorite')}/>
// </HeaderButtons>

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default MealDetailsScreen;
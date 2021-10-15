import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StarComponent } from '../compnents/CustomHeaderBtn';
import { MEALS } from '../data/dummy-data';


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
            <View >
                <TouchableOpacity  style={{ flexDirection: 'row' }}
                onPress={() => { console.log('mark as you favorite food!!!') }}>
                    <StarComponent />
                   
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
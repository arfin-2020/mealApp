import React from 'react';
import {
    ScrollView,
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import DefaultText from '../compnents/DefaultText'
import { StarComponent } from '../compnents/CustomHeaderBtn';
import { MEALS } from '../data/dummy-data';

const ListItem = (props) =>{
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}
const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    //  console.log('id--------',selectedMeal)
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <View style={styles.details}>
                    <DefaultText>{selectedMeal.duration}m</DefaultText>
                    <DefaultText>{selectedMeal.complexity}</DefaultText>
                    <DefaultText>{selectedMeal.affordability}</DefaultText>
                </View>
                <View>
                    <Text style={styles.titleStyle}>Ingredients</Text>
                    {selectedMeal.ingredients.map((ingredient) => <View key={ingredient}>
                        <ListItem> {ingredient}</ListItem>
                    </View>)}
                    <Text style={styles.titleStyle}>Steps</Text>
                    {selectedMeal.steps.map((step) => <View key={step}>
                        <ListItem> {step}</ListItem>
                    </View>)}
                </View>
            </View>
        </ScrollView>

    )
}


MealDetailsScreen.navigationOptions = (navigateData) => {
    const mealId = navigateData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <View >
                <TouchableOpacity
                    onPress={() => { console.log('mark as you favorite food!!!') }}>
                    <StarComponent />
                </TouchableOpacity>
            </View>
        )

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
    },
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',

    },
    titleStyle: {
        color: 'black',
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        fontSize: 22,
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal:20,
        borderColor: '#008080',
        borderWidth: 2,
        padding:10,
    }
})


export default MealDetailsScreen;
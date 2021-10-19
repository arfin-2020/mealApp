import React ,{useEffect,useCallback} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import DefaultText from '../compnents/DefaultText'
// import { MEALS } from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color'


const ListItem = (props) =>{
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}
const MealDetailsScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
    //  console.log('id--------',selectedMeal)
    const currentMealIsFavorite = useSelector(state =>
        state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(mealId))
    },[dispatch, mealId]);

    // কোন কিছু আমরা চাইলে পাটাটে পারি নিচের সেকশনে এইটার মাধ্যমে
    useEffect(()=>{
        // props.navigation.setParams({mealTitle:selectedMeal.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler])


    useEffect(()=>{
        props.navigation.setParams({currentMealIsFavorite:currentMealIsFavorite})
    },[currentMealIsFavorite])


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
    // const mealId = navigateData.navigation.getParam('mealId');
    // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealTitle = navigateData.navigation.getParam('mealTitle');
    // console.log('mealtitle --------',mealTitle)
    const toggleFavorite = navigateData.navigation.getParam('toggleFav');
    const currentMealIsFavorite =  navigateData.navigation.getParam('currentMealIsFavorite');
    console.log('id-------',currentMealIsFavorite)
    return {
        headerTitle: mealTitle,
        headerRight: () => (
                <TouchableOpacity
                    onPress={toggleFavorite}>
                <Icon 
                name={currentMealIsFavorite ? 'star-sharp' : 'star-outline'}
                size={30}  
                color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
                </TouchableOpacity>
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
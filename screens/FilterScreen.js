import React, { useEffect, useState, useCallback } from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity,
    Platform, Switch,
    // FlatList
} from 'react-native';
import { MenuComponent, SaveIcon } from '../compnents/CustomHeaderBtn';
import Color from '../constant/Color';
import {useDispatch} from 'react-redux';
import { setFilters } from '../store/actions/meals';


const FilterSwitch = (props) =>{
    return(
        <View style={styles.filterContainer}>
                <Text style={styles.text}>{props.title}</Text>
                <Switch
                    trackColor={{ true: Color.primaryColor }}
                    thumbColor={Platform.OS === 'android' ? Color.primaryColor :''}
                    value={props.state}
                    onValueChange={props.onChange} 
                />
            </View>
    )
}

const FilterScreen = (props) => {

    const {navigation} = props;
    const [isGlutenFree, setGluten] = useState(false);
    const [isLactoseFree, setisLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(()=>{
        navigation.setParams({save:saveFilters});
    },[saveFilters])
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filter / Restraction </Text>
            <FilterSwitch 
            title='Gluten-free' 
            state={isGlutenFree} 
            onChange={newValue => setGluten(newValue)}
            />
            <FilterSwitch 
            title='Lactose-free' 
            state={isLactoseFree} 
            onChange={newValue => setisLactoseFree(newValue)}
            />
            <FilterSwitch 
            title='Vegan' 
            state={isVegan} 
            onChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch 
            title='Vegetarian' 
            state={isVegetarian} 
            onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}


FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <TouchableOpacity onPress={() => navData.navigation.toggleDrawer()}>
                <MenuComponent />
            </TouchableOpacity>
        ),
        headerRight: ()=>(
            <TouchableOpacity 
            onPress={navData.navigation.getParam('save')}>
            <SaveIcon onPress={()=>console.log('he click me')}/>
            </TouchableOpacity>
        )

        // headerStyle:{
        //     backgroundColor: Platform.OS === 'android' ? Color.primaryColor  : 'white'
        // },
        // headerTintColor:Platform.OS === 'android' ? 'white' : Color.accentColor,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
        color:'black'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
    },
    text:{
        color:'black',
        fontFamily:'OpenSans-Regular'
    }
})


export default FilterScreen;
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Platform } from 'react-native';
import { MenuComponent } from '../compnents/CustomHeaderBtn';
import Color from '../constant/Color';



const FilterScreen = () =>{
    return (
        <View style={styles.screen}>
            <Text>Hey This is FilterScreen Screen </Text>
        </View>
    )
}


FilterScreen.navigationOptions = (navData) => {
    return{
        headerTitle: 'Filter Meals',
        headerLeft: ()=>(
            <TouchableOpacity onPress={()=>navData.navigation.toggleDrawer()}>
                     <MenuComponent/>
            </TouchableOpacity>
        ),
    
        // headerStyle:{
        //     backgroundColor: Platform.OS === 'android' ? Color.primaryColor  : 'white'
        // },
        // headerTintColor:Platform.OS === 'android' ? 'white' : Color.accentColor,
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default FilterScreen;
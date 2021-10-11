import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const CategoriesScreen = () =>{
    return (
        <View style={styles.screen}>
            <Text style={styles.textStyle}>Hey This is Categories Screenss </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        fontSize:18,
        color:'red',
        fontFamily:'DancingScript-Regular'
      },
})


export default CategoriesScreen;
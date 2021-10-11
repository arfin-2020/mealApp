import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const FavoriteScreen = () =>{
    return (
        <View style={styles.screen}>
            <Text>Hey This is FavoriteScreen Screen </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default FavoriteScreen;
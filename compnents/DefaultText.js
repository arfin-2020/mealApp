import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DefaultText = (props) =>{
    return (
        <View>
            <Text style={styles.textStyle}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: 'OpenSans-Bold',
        color: 'black',
    },
})

export default DefaultText;
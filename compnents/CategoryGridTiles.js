import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native';


const CatgegoryGridTiles = (props) => {
    let TouchableCom = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCom = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCom
            style={{flex:1}}
            onPress={props.onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.color}}}>
                <Text style={styles.textStyle} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableCom>
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 40,
        overflow:'hidden'
    },
    textStyle: {
        color: 'black',
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,

    },
    container: {
        flex: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 40,
        // overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,

        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default CatgegoryGridTiles;
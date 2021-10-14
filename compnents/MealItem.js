import React from 'react';
import { Text,
     View,
      StyleSheet,
     TouchableOpacity, ImageBackground } from 'react-native';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                   <View style={styles.titleContainer}>
                   <Text style={styles.bgtextStyle}>{props.title}</Text>
                   </View>
                </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetails}}>
                    <Text style={styles.textStyle}>{props.duration}m</Text>
                    <Text style={styles.textStyle}>{props.complexity}</Text>
                    <Text style={styles.textStyle}>{props.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical: 10,
    },
    textStyle:{
        color:'black',
        
    },
    bgtextStyle:{
        fontSize:22,
        color:'white',
        textAlign:'center',
    },
    mealRow:{
        flexDirection:'row',
       
    },
    mealHeader:{
        height: '85%',
    },
    mealDetails:{
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems:'center',
            height: '15%',
    },
    bgImage:{
        height: '100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        fontFamily:'DancingScript-SemiBold',
        paddingVertical:5,
        paddingHorizontal: 12,
    }
})

export default MealItem;
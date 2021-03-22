import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const Heather=props=>{
    return ( 
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:90
    },

})

export default Heather

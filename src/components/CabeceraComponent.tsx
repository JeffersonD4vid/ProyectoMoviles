import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

export const CabeceraComponent = () => {
  return (
    <View style={styles.conatinerImg}>
      <Text style={styles.title}>MiniMarket</Text>
      <Icon name='account-circle' size={40} color={'#239B56'}/>
    </View>
  )
}

const styles=StyleSheet.create({
  
    conatinerImg:{
        backgroundColor:'#24272C',
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingTop:50,
        paddingLeft:20,
        paddingBottom:15,
        paddingRight:10,
        
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },

    title:{
        color:'#24F2F5',
        fontSize:33,
        fontWeight:'bold',
        borderBottomColor:'#01F59C',
        borderBottomWidth:1,
        borderRadius:20
    },
})
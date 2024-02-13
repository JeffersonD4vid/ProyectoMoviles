import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<RootStackParamList,'Inicio'>{};


export const Inicio = () => {
  return (
    <View style={styles.container}>
        <View style={styles.conatinerImg}>
            <Image
             style={styles.tinyLogo}
            source={{
             uri: 'https://cdn-icons-png.freepik.com/512/862/862819.png',
            }}/>
            <Image
             style={styles.tinyLogo2}
            source={{
             uri: 'https://cdn-icons-png.flaticon.com/128/13072/13072575.png',
            }}/>
        </View>
            

        </View>
  )
}

const styles=StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'white'
    },

    conatinerImg:{
        flex:.1,
        backgroundColor:'black',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    tinyLogo: {
        top:20,
        left:10,
        width: 50,
        height: 50,
    },

    tinyLogo2: {
        position:'absolute',
        top:20,
        right:0,
        width: 50,
        height: 50,
    },

    touchOpacity:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'skyblue',
        flex:1,
        height:200,
        borderRadius:20
    }

})
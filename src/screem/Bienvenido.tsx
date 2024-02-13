import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonsBienvenidos } from '../components/ButtonsBienvenidos';
import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';


const image = {uri:'https://c0.wallpaperflare.com/preview/874/237/133/vegetable-stand-photo.jpg'};

interface Props extends StackScreenProps<RootStackParamList,'Bienvenido'>{};


export const Bienvenido = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover'
            style={styles.imageFondo}>
            <View style={styles.contentTitulo}>   
                <Text style={styles.tiulo1}>Welcome to</Text>
                <Text style={styles.tiulo2}>MiniMarketExpress</Text>
            </View> 
        <ButtonsBienvenidos title='Logn in' onPress={()=>navigation.navigate('Login')} />
        <ButtonsBienvenidos title='Sign up' onPress={()=>navigation.navigate('Registro')}/>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,    
    },

    imageFondo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',        
    },

    contentTitulo:{
        justifyContent:'center',
        alignItems:'center',
        bottom:20
    },

    tiulo1:{
        fontSize:74,
        fontWeight:'bold',
        color:'#0f295c',

    },

    tiulo2:{
        fontSize:40,
        fontWeight:'bold',
        color:'#eafee7',   
    },

})

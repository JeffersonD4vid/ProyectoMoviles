import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonsBienvenidos } from '../components/ButtonsBienvenidos';
import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';


const image = {uri:'https://img.freepik.com/fotos-premium/almacenar-fondo-borroso-bokeh_926199-617848.jpg?w=360'};

interface Props extends StackScreenProps<RootStackParamList,'Bienvenido'>{};


export const Bienvenido = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <StatusBar 
        backgroundColor="transparent" 
        translucent={true} 
        />
        <ImageBackground source={image} resizeMode='cover'
            style={styles.imageFondo}>
            <View style={styles.contentTitulo}>   
                <Text style={styles.tiulo1}>Welcome to</Text>
                <Text style={styles.tiulo2}>MiniMarketExpress</Text>
                
            </View> 

            <View style={styles.contenBtn}>
                <ButtonsBienvenidos title='Logn in' onPress={()=>navigation.navigate('Login')} />
                <ButtonsBienvenidos title='Sign up' onPress={()=>navigation.navigate('Registro')}/>
            </View>
            <View style={styles.contenBtn}>
                <TouchableOpacity onPress={()=>navigation.navigate('Inicio')}>
                    <Text style={styles.textSinLogin}>Continue without logging in!</Text>
                </TouchableOpacity>
            </View>
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
        marginTop:80
    },

    tiulo1:{
        fontSize:74,    
        fontWeight:'bold',
        color:'#09277C',
        textAlign:'center'
    },

    tiulo2:{
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',   
        paddingBottom:10,
        borderBottomColor:'#fff',
        borderBottomWidth:3,
        borderRadius:30
    },

    contenBtn:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
    },

    textSinLogin:{
        fontSize:25,
        color:'#fff',
        padding:13,


    }
})

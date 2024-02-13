import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme'
import { InputsComponents2 } from '../components/InputsComponents2'
import { ButtonsComponents } from '../components/ButtonsComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'

const imgFondo= {uri:'https://img.freepik.com/vector-gratis/fondo-fluido-morado_53876-99561.jpg?size=626&ext=jpg&ga=GA1.1.1208337363.1703221900&semt=ais'}

interface Props extends StackScreenProps<RootStackParamList,'Login'>{};

export const Registro = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <ImageBackground
         source={imgFondo} resizeMode='cover'
         style={styleGlobal.image}>

        <Text style={styles.titulo}>Create</Text>
        <Text style={styles.titulo}>Account</Text>

        <InputsComponents2 placeholder='Name'/>
        <InputsComponents2 placeholder='Email'/>
        <InputsComponents2 placeholder='Password'/>
        
        <ButtonsComponents title='Sign up' onPress={()=>navigation.navigate('Login')}/>

        <TouchableOpacity style={styleGlobal.dontAccount}
            onPress={()=>navigation.navigate('Login')}>
            <Text style={styleGlobal.textDontAccount}>Already have an account? 
            <Text style={styleGlobal.textSignUp}> Log in</Text></Text>
        </TouchableOpacity>
   
        </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },

    titulo:{
        fontSize:45,
        fontWeight:'bold',
        color:'#fff',
        alignSelf:'flex-start',
        left:40,
        bottom:70
    },

    textSignUp:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold', 
        
    },

})

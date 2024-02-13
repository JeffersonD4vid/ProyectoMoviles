import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { InputsComponents1 } from '../components/InputsComponents1';
import { ButtonsComponents } from '../components/ButtonsComponents';
import { styleGlobal } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';

const imgFondo= {uri:'https://img.freepik.com/vector-gratis/fondo-fluido-morado_53876-99561.jpg?size=626&ext=jpg&ga=GA1.1.1208337363.1703221900&semt=ais'}

interface Props extends StackScreenProps<RootStackParamList,'Login'>{};

export const Login = ({navigation}:any) => {


  //Hook para visualizar la contraseña
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <View style={styles.container}>
        <ImageBackground 
            source={imgFondo} resizeMode='cover'
            style={styleGlobal.image}>

        <Text style={styles.titulo}>Welcome</Text>
        <Text style={styles.subTitulo}>Sing in to your account</Text>

        <InputsComponents1 placeholder='Email'/>
        <InputsComponents1 placeholder='Password'
                           isPassword={hiddenPassword}/>
        
        <TouchableOpacity>
            <Text style={styles.forgotPass}>Forgot your password?</Text>
        </TouchableOpacity>

        <ButtonsComponents title='Sign in' onPress={()=>navigation.navigate('Inicio')}/>

        <TouchableOpacity style={styleGlobal.dontAccount}
            onPress={()=>navigation.navigate('Registro')}>
            <Text style={styleGlobal.textDontAccount}>Don´t have an account? 
            <Text style={styleGlobal.textSignUp}> Sign up</Text>
            </Text>
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
        fontSize:80,
        color:'#1a5cf6',
        fontWeight:'bold',
        bottom:30
    },

    subTitulo:{
        fontSize:20,
        color:'#fff',
        bottom:20      
    },
  
    forgotPass:{
        color:'#0452f1',
        fontSize:15
    },


    
})
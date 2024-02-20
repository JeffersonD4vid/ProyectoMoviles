import React, { useState } from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme'
import { ButtonsComponents } from '../components/ButtonsComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, User } from '../navigator/StackNavigator';
import { InputsComponents1 } from '../components/InputsComponents1'
import { getIdNewUser, hasErrorFormRegister, showSnackBar, verifyExistUser } from '../colors/authValidacion'
import { ERROR_COLOR, PRIMARY_COLOR } from '../colors/constantsColors'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const imgFondo= {uri:'https://img.freepik.com/vector-gratis/vector-elemento-diseno-memphis-geometrico-gris_53876-175141.jpg?w=360&t=st=1708271657~exp=1708272257~hmac=c56da5d27392fbd85732f3e212ab8f1af548f32ee21df718b814016745ccda97'}

export interface RegisterForm{
    username:string;
    phone:string;
    email:string;
    password:string;
    hasError:boolean;
}

interface RegisterProps{
    userLogin:User[];
    setUserLogin:(user:User)=>void;
}

//interface Props extends StackScreenProps<RootStackParamList,'Login'>{};

export const Registro = ({userLogin, setUserLogin}:RegisterProps) => {

  const navigation=useNavigation();

  //Gestionar datos del formulario
  const [form, setForm] = useState<RegisterForm>({
    username:'',
    phone:'',
    email:'',
    password:'',
    hasError:false
  });

  //Hook para visualizar la contraseña
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Funcion que cambiara los valores del formulario
  const handlerChangeText=(name:string, value:string)=>{
    setForm(prevState =>({
        ...prevState,
        [name]:value
    }))
  }

  
  const handlerSaveUser=()=>{
    if(hasErrorFormRegister(form)){
        setForm(prevState=>({
            ...prevState,
            hasError:true
        }))
        return;
    }
    setForm(prevState=>({
        ...prevState,
        hasError:false
    }))


    const existUser=verifyExistUser(userLogin, form)
    if(existUser){
        showSnackBar('User already exists', ERROR_COLOR)
        return;
    }

    const newUser:User={
        id:getIdNewUser(userLogin),
        ...form
    }

    setUserLogin(newUser)
    showSnackBar('User registered with successfully', ERROR_COLOR)

    console.log(form);
    

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
                
        <StatusBar 
        backgroundColor="transparent" 
        translucent={true} 
        />

        <ImageBackground
         source={imgFondo} resizeMode='cover'
         style={styleGlobal.image}>

        <View style={styles.contentTitle}>
            <Text style={styles.titulo}>Create</Text>
            <Text style={styles.titulo}>Account</Text>
        </View>


        <View style={{ marginTop:-40,
                     ...styleGlobal.contentInputs}}>
            <InputsComponents1 
                            placeholder='User' 
                            name={'username'} 
                            onChangeText={handlerChangeText} 
                            hasError={form.hasError}/>
            <InputsComponents1 
                            placeholder='Phone' 
                            name={'phone'} 
                            onChangeText={handlerChangeText} 
                            hasError={form.hasError}/>

            <InputsComponents1 
                            placeholder='Email' 
                            name={'email'} 
                            onChangeText={handlerChangeText} 
                            hasError={form.hasError}/>
            <InputsComponents1 
                            placeholder='Password' 
                            name={'password'}
                            onChangeText={handlerChangeText}
                            isPassword={hiddenPassword}
                            hasIcon={true}
                            accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                            hasError={form.hasError} />
        </View>
        
        <ButtonsComponents title='Sign up' onPress={handlerSaveUser}/>

        <TouchableOpacity style={styleGlobal.dontAccount}
           onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Login'}))}>
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

    contentTitle:{
        alignSelf:'flex-start',
        marginHorizontal:25,
        bottom:60
    },

    titulo:{
        fontSize:55,
        fontWeight:'bold',
        color:PRIMARY_COLOR,
    },



})

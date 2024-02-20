import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { InputsComponents1 } from '../components/InputsComponents1';
import { ButtonsComponents } from '../components/ButtonsComponents';
import { styleGlobal } from '../theme/appTheme';
import { RootStackParamList, User } from '../navigator/StackNavigator';
import { ERROR_COLOR, PRIMARY_COLOR } from '../colors/constantsColors';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { hasErrorFormLogin, showSnackBar, verifyExistUser } from '../colors/authValidacion';
import Icon from 'react-native-vector-icons/MaterialIcons'

//Imagen Backgroung
const imgFondo= {uri:'https://img.freepik.com/vector-gratis/vector-elemento-diseno-memphis-geometrico-gris_53876-175141.jpg?w=360&t=st=1708271657~exp=1708272257~hmac=c56da5d27392fbd85732f3e212ab8f1af548f32ee21df718b814016745ccda97'}

export interface LoginForm{
    email:string;
    password:string;
    hasError:boolean;
}



//interface Props extends StackScreenProps<RootStackParamList,'Login'>{};
interface LoginProps{
    users:User[]
}


export const Login = ({users}:LoginProps) => {

  const navigation = useNavigation();

  //Gestionar datos del formulario
  const [form, setForm] = useState<LoginForm>({
    email:'',
    password:'',
    hasError:false
  })

  const handlerChangeText=(name:string, value:string)=>{
    setForm(prevState =>({
        ...prevState,
        [name]:value
    }))
  }

   //Hook para visualizar la contraseña
   const [hiddenPassword, setHiddenPassword] = useState(true);


  const handlerSendInfo=()=>{
    //Validar que los campos esten llenos
    if(hasErrorFormLogin(form)){
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


    const existUser = verifyExistUser(users, form)
    
        if(!existUser || existUser.password != form.password){
            showSnackBar("Incorrect password or email", ERROR_COLOR)
            return;
        }

        navigation.dispatch(CommonActions.navigate({name:'Inicio'}))
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

                <View>
                    <Text style={styles.titulo}>Welcome</Text>
                    <Text style={{ textAlign:'center',
                                    ...styles.subTitulo}}>Sing in to your account</Text>
                </View>


                <View style={styleGlobal.contentInputs}>
                    <InputsComponents1 
                                    placeholder='Email' 
                                    name='email' 
                                    onChangeText={handlerChangeText}
                                    hasError={form.hasError}/>

                    <InputsComponents1 
                                    placeholder='Password'
                                    name='password'
                                    onChangeText={handlerChangeText}
                                    isPassword={hiddenPassword}
                                    hasIcon={true}
                                    accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                                    hasError={form.hasError}/>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPass}>Forgot your password?</Text>
            </TouchableOpacity>

            <ButtonsComponents title='Sign in' onPress={handlerSendInfo}/>

            <TouchableOpacity style={styleGlobal.dontAccount}
                onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Registro'}))}>
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
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        bottom:30
    },

    subTitulo:{
        fontSize:20,
        color:'#0009',
        bottom:10      
    },

    forgotPass:{
        color:PRIMARY_COLOR,
        fontSize:15,
    },

})
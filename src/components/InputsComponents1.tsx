import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet, TextInput } from 'react-native'
import { ERROR_COLOR } from '../colors/constantsColors';
import Icon from 'react-native-vector-icons/MaterialIcons'


interface InputProps{
    placeholder:string;
    name:string;
    onChangeText:(name:string, value:string)=>void;
    isPassword?:boolean;
    hasIcon?:boolean;
    accionIcon?:()=>void;
    hasError:boolean;
}

export const InputsComponents1 = ({placeholder, name, onChangeText, isPassword, hasIcon=false, accionIcon=()=>{}, hasError}:InputProps) => {
  return (

    <View >
        <TextInput 
            placeholder={placeholder}
            keyboardType='default'
            style={(hasError)
                ?{...styles.textInput, ...styles.error}
                :{...styles.textInput}}
            onChangeText={(value:string)=>onChangeText(name, value)}
            secureTextEntry={isPassword}/>

            {
                (hasIcon)
                ?<Icon style={styles.icon} name='visibility' size={20} color={'#0008'} onPress={accionIcon}/>
                :null
            }

            {
                (hasError)
                ?<Text style={styles.errorText}>The field is required</Text>
                :null
            }
    </View>
  )
}

const styles=StyleSheet.create({

    textInput:{
        backgroundColor:'#EEF7F8',
        paddingHorizontal:20,
        borderRadius:30,
        marginVertical:10
    },

    error:{
        borderColor:ERROR_COLOR,
        borderStyle:'solid',
        borderWidth:1,

    },

    errorText:{
        color:'#a93131',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
    },

    
    icon:{
        position:'absolute',
        right:25,
        top:25
    }
})
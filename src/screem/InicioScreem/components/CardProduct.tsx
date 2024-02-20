import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../Inicio'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ModalProduct } from './ModalProduct';



interface Props{
    product:Product;
    idCardNav:number;
}

export const CardProduct = ({product, idCardNav}:Props) => {

const [showModal, setShowModal] = useState(false);

const navigation = useNavigation();

  return (
    
  <View>
        <TouchableOpacity onPress={()=> if (idCardNav == 1)
                                        ?navigation.dispatch(CommonActions.navigate({name:'Viveres'}))
                                        :navigation.dispatch(CommonActions.navigate({name:'Lacteos'}))}>
            <View style={styles.root}>
                
                <Image 
                    source={{
                        uri: product.pathImage
                    }} 
                    style={styles.image}/>

                <View style={styles.contentTitle}>
                    <Text style={styles.title}>{product.name}</Text>
                </View> 
            </View>
        </TouchableOpacity>
        
    </View>
  )
}  


const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:30,
        marginBottom:20,
        marginRight:10,
        marginTop:15
    },

    title:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:25,
        textAlign:'center',
    },

    image:{
        width:220,
        height:100,
        borderRadius:20,
        opacity:0.5
    },

    contentTitle:{
       position:'absolute',    
    },

})
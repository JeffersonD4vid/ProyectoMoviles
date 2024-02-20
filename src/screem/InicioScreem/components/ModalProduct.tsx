import React from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../Inicio'




interface Props{
    product:Product;
    isVisible: boolean;
    changeVisible:()=>void;
}

export const ModalProduct = ({product, isVisible, changeVisible}:Props) => {
  


  return (
    <Modal visible={isVisible} animationType='slide'>
        <View style={styles.content}>
          <TouchableOpacity onPress={changeVisible}>  
              <Text>{product.name}</Text>
          </TouchableOpacity>
        </View>
    </Modal>

  )
}


const styles = StyleSheet.create({
  content:{
    margin:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:30
  }
})
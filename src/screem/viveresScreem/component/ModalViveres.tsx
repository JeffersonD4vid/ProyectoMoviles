import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Vivere } from '../Viveres';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styleGlobal } from '../../../theme/appTheme';





interface Props{
    viveres:Vivere
    isVisible: boolean;
    changeVisible:()=>void;
    handlerChangeStockViveres:(idViveres: number, quantity: number)=>void;
}

export const ModalViveres = ({viveres, isVisible, changeVisible, handlerChangeStockViveres}:Props) => {
   
 const {width} = useWindowDimensions();

 const [quantity, setQuantity] = useState(1);

 const handlerChangeQuantity =(value:number)=>{
    setQuantity(quantity+value)
 }

 const handlerAddViveres = ()=>{
    handlerChangeStockViveres(viveres.id, quantity);
    setQuantity(1)
    changeVisible()
 }
  
  return (
    <Modal visible={isVisible} animationType='slide' transparent={true}>

        <View style={styleGlobal.root}>

            <View style={{width:width*0.87,
                        ...styleGlobal.content}}>

                <View style={styleGlobal.headerModal}>
                    <Text style={styleGlobal.title}>{viveres.name}</Text>
                    <View style={styleGlobal.iconClose}>
                        <Icon name='cancel' color={'#F4D03F'} size={45} onPress={changeVisible}/>
                    </View>        
                </View> 

                <View style={styles.image}>
                    <Image source={{
                        uri:viveres.pathImage
                    }}
                    style={{width:100, height:100, margin:20}}/>
                    <Text style={{fontSize:18, color:'#000'}}>Precio: ${viveres.price.toFixed(2)}</Text>
                </View>

                {
                    (viveres.stock == 0)
                    ?<Text style={styles.productoAgotado}>Producto Agotado!</Text>
                    :
                    <View>                 
                        <View style={styles.quantityContent}>
                            <Text style={{fontSize:18, color:'#000'}}>Escoja la cantidad    </Text>
                            <TouchableOpacity style={styles.bottonQuantity}
                                            onPress={()=>handlerChangeQuantity(-1)}
                                            disabled={quantity == 1}>
                                <Text style={styles.buttonQuantityText}>-</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:18, color:'#000'}}>     {quantity}     </Text>
                            <TouchableOpacity style={styles.bottonQuantity}
                                            onPress={()=>handlerChangeQuantity(1)}
                                            disabled={quantity == viveres.stock}>
                                <Text style={styles.buttonQuantityText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:18, color:'#000'}}>Total: $ {(viveres.price*quantity).toFixed(2)}</Text>
                        </View>

                        <TouchableOpacity style={styles.buttonCar}
                                          onPress={handlerAddViveres}>
                            <Text style={styles.buttonCarText}>Agregar al carrito</Text>
                        </TouchableOpacity>
                    </View>
                }          
                
                
            </View>
        </View>
    </Modal>

  )
}   


const styles = StyleSheet.create({

  image:{
    alignItems:'center'
  },

  quantityContent:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },

  bottonQuantity:{
    height:35,
    width:35,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#EB984E',
    borderRadius:50
  },

  buttonQuantityText:{
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  },

  buttonCar:{
    backgroundColor:'#EB984E',
    paddingVertical:10,
    alignItems:'center',
    borderRadius:20,
    margin:20
  },

  buttonCarText:{
    color:'#fff',
    fontWeight:'bold',
    padding:10,
    fontSize:16
  },

  productoAgotado:{
    backgroundColor:'#CB4335',
    padding:15,
    margin:20,
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    borderRadius:10
  }
})

import React from 'react'
import { FlatList, Modal, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Car } from '../Viveres'
import { styleGlobal } from '../../../theme/appTheme';
import  Icon from 'react-native-vector-icons/MaterialIcons';

interface Props{
    cars:Car[];
    isVisible: boolean;
    changeVisible:()=>void
}


export const ModalCar = ({cars, isVisible, changeVisible}:Props) => {
  
    const {width} = useWindowDimensions();
  
    return (
    <Modal visible={isVisible}  animationType='slide' transparent={true}> 
        <View style={styleGlobal.root}>
            <View style={{width:width*0.87,
                          ...styleGlobal.content}}>
                <View style={styleGlobal.headerModal}>
                    <Text style={styleGlobal.title}>Mis Productos</Text>
                    <View style={styleGlobal.iconClose}>
                        <Icon name='cancel' color={'#239B56'} size={45} onPress={changeVisible}/>
                    </View>        
                </View>

                <View style={styles.infoTable}>
                    <Text style={styles.textHeaderTable}>Producto </Text>
                    <View style={styles.descriptionTable}>                       
                        <Text style={styles.descriptionText}>Precio</Text>
                        <Text style={styles.descriptionText}>Cant</Text>
                        <Text style={styles.descriptionText}>Total</Text>
                    </View>
                </View>
                <FlatList 
                    data={cars}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item})=> 
                    <View >
                        <Text style={{justifyContent:'flex-start'}}>{item.name}</Text>
                        <View style={styles.descriptionTable}>
                            <Text style={styles.textValue}>${item.price.toFixed(2)}</Text>
                            <Text style={styles.textValue}>{item.quantity}</Text>
                            <Text style={styles.textValue}>${(item.price*item.quantity).toFixed(2)}</Text>
                        </View>                        
                    </View>}/>
                    
            </View>
        </View>
    </Modal>

  )
}


const styles = StyleSheet.create({
    infoTable:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },

    descriptionTable:{
        flexDirection:'row',
        marginLeft:100,
        backgroundColor:'red',
    },

    descriptionText:{
        marginHorizontal:10,
        paddingHorizontal:2,
        fontWeight:'bold',
        color:'#000'
    },

    textHeaderTable:{
        fontWeight:'bold',
        color:'#000'
    },

    textValue:{
        paddingLeft:10
    }
})
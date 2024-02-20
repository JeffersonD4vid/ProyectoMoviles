import { useState } from "react";
import { Vivere } from '../Viveres';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalViveres } from "./ModalViveres";

interface Props{
    viveres:Vivere;
    handlerChangeStockViveres:(idViveres: number, quantity: number)=>void;
}

export const CardViveres = ({viveres, handlerChangeStockViveres}:Props) => {

const [showModal, setShowModal] = useState(false);
  return (
    
<View>
        

            <View style={styles.root}>
                <Image 
                    source={{
                        uri:viveres.pathImage
                    }} 
                    style={styles.image}/>
                <View style={styles.contentTitle}>
                    <Text style={{ backgroundColor:'#ABEBC6',                                  
                                   borderTopRightRadius:10,                                 
                                   borderTopLeftRadius:10,
                                  ...styles.title}}>
                          {viveres.name}</Text>
                    <Text style={styles.title}>Precio: ${viveres.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={()=>setShowModal(!showModal)}>        
                    <View style={styles.icon}>
                        <Icon name={'add-shopping-cart'} size={45} color={'#239B56'}/>
                    </View>
                </TouchableOpacity>
                <ModalViveres viveres={viveres} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} handlerChangeStockViveres={handlerChangeStockViveres}/> 
            </View>
            
        
        {/*<ModalProduct viveres={viveres} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)}/>*/}
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
        marginTop:15,
    },

    title:{
        fontWeight:'bold',
        color:'#000',
        fontSize:18,
        padding:15,
        textAlign:'center'
    },

    contentTitle:{
        marginTop:10,
        backgroundColor:'#F5B041',
        borderRadius:10
        
    },

    image:{
        width:150,
        height:150,
        borderRadius:10,
        resizeMode: 'stretch',
    },

    icon:{
        marginTop:20
    }

})
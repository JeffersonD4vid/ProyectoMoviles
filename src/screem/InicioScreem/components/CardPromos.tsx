import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Promos } from '../Inicio';

interface Props{
    promos:Promos
}

export const CardPromos = ({promos}:Props) => {


  return (

        <View style={styles.root}>
            <Image 
                source={{
                    uri:promos.pathImage
                }} 
                style={styles.image}/>
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
        color:'#19E6C1',
        fontSize:25,
        textAlign:'center',
    },

    image:{
        width:300,
        height:120,
        borderRadius:15,
        resizeMode: 'stretch',
    },

    contentTitle:{
       position:'absolute',    
    },
})
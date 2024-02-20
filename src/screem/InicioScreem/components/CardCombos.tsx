import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Combos, Promos } from '../Inicio';

interface Props{
    combos:Combos
}

export const CardCombos = ({combos}:Props) => {


  return (

        <View style={styles.root}>
            <Image 
                source={{
                    uri:combos.pathImage
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
        width:170,
        height:170,
        borderRadius:15,
        resizeMode: 'stretch',
    },

    contentTitle:{
       position:'absolute',    
    },
})
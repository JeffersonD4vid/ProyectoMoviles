import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../colors/constantsColors";

export const styleGlobal = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    dontAccount:{
        top:70,
    },

    textDontAccount:{
        fontSize:16,
        color:'black'
    },

    textSignUp:{
        fontSize:16,
        color:PRIMARY_COLOR
    },

    contentInputs:{
        width:'75%',
        marginVertical:15,
    },

    contentBtnBack:{
        backgroundColor:'#fff',
        padding:10,
        position:'absolute',
        top:40,
        left:40,
    },

    contentTitleProducts:{
        alignSelf:'flex-start',   
    },

    titleProducts:{
        color:'#fff',
        textAlign:'center',
        padding:10,
        fontSize:20,
        borderBottomColor:'cyan',
        borderBottomWidth:1,
        borderRadius:20,          
    },

    root:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#0009'
      },
      content:{
        margin:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'#fff'
      },

      headerModal:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        borderStyle:'solid',
        padding:10,
        backgroundColor:'#3498DB',
        borderTopRightRadius:30,                                
        borderTopLeftRadius:30,
      },
    
      iconClose:{
        flex:1,
        alignItems:'flex-end'
      },
    
      title:{
        fontSize:20,
        color:'#000',
        padding:20,
      },
})
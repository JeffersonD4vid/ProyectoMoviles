import React, { useEffect, useRef } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { RootStackParamList } from '../../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { CardProduct } from './components/CardProduct'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../../colors/constantsColors'
import { CardPromos } from './components/CardPromos'
import { CardCombos } from './components/CardCombos'
import { styleGlobal } from '../../theme/appTheme';
import { RegisterForm } from '../Registro';
import { CabeceraComponent } from '../../components/CabeceraComponent'


interface Props extends StackScreenProps<RootStackParamList,'Inicio'>{};


//Datos para el flatlist de productos
export interface Product{
    id:number,
    name:string,
    pathImage:string
}

const products:Product[]=[
    {id:1, name:'Viveres', pathImage:'https://www.wradio.com.co/resizer/E4VYUEjv9ZT-QnOGm0Q-4Ye2hmM=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/5E2DYKAUVJCCVIMBOMTPWYX3LE.jpg'},
    {id:2, name:'Productos frescos', pathImage:'https://cdn.portalfruticola.com/2020/09/89fe36db-mix-frutas-shutterstock_793959790.jpg'},
    {id:3, name:'Productos Congelados', pathImage:'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BDRRDFVZCRGQ3ANGRMYWZFRR7M.jpg'},
    {id:4, name:'Lacteos', pathImage:'https://images.ecestaticos.com/5R1YUlQPhHlncdmKDsmSByzzAD4=/42x19:661x483/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F773%2F094%2F19d%2F77309419d4585c2d4a3590623d2e9170.jpg'},
    {id:5, name:'Embutidos', pathImage:'https://artemonte.com/wp-content/uploads/Beneficios-de-comer-embutido-768x432.png'},
    {id:6, name:'Snacks', pathImage:'https://www.tastingtable.com/img/gallery/30-absolute-best-snacks-from-trader-joes-ranked/intro-1688739200.jpg'},
    {id:7, name:'Bebidas', pathImage:'https://i.blogs.es/7fc543/alcohol/1366_2000.jpg'},
    {id:8, name:'Limpieza y hogar', pathImage:'https://img.freepik.com/fotos-premium/productos-limpieza-hogar_863013-118957.jpg'},
]

//Datos para flatlist de promociones
export interface Promos{
    id:number,
    pathImage:string
}

const promos:Promos[]=[
    {id:1, pathImage:'https://www.designi.com.br/images/preview/10040393.jpg'},
    {id:1, pathImage:'https://www.designi.com.br/images/preview/10028327.jpg'},
    {id:1, pathImage:'https://img.freepik.com/vector-premium/oferta-especial-vibrante-fondo-banner_105164-558.jpg'},
    {id:1, pathImage:'https://www.supermercadosantamaria.com/documents/10180/1517042/Carnes+main+new/df988556-eacd-453d-afc3-74c1fd624ed3?t=1700140986000'}
]


//Datos para el flatlist de combos
export interface Combos{
    id:number,
    pathImage:string
}

const combos:Combos[]=[
    {id:1, pathImage:'https://image.isu.pub/170320192939-56bd969bc170ade54372cc2e13b94c25/jpg/page_1_thumb_large.jpg'},
    {id:1, pathImage:'https://pbs.twimg.com/media/DdvHt1EV4AEBAOm.jpg'},
    {id:1, pathImage:'https://pbs.twimg.com/media/Eak82_lXgAEuebZ.jpg'},
    {id:1, pathImage:'https://flavoo.club/carnesexpressvzla/wp-content/uploads/2021/07/comb-10.jpg'},
    {id:1, pathImage:'https://elrancho.com.ec/wp-content/uploads/2021/05/272244874_1188276558579242_4290147872398322648_n.jpg'},
    {id:1, pathImage:'https://tienda.corsolecheria.com/wp-content/uploads/Combo-tablita.png'},
    {id:1, pathImage:'https://tienda.corsolecheria.com/wp-content/uploads/Combo-Quesos.png'},
    {id:1, pathImage:'https://pbs.twimg.com/media/Em1JwzBWEAANerR.jpg'},
    {id:1, pathImage:'https://pbs.twimg.com/media/Em1JwzBWEAANerR.jpg'},
    {id:1, pathImage:'https://pbs.twimg.com/media/Em1JwzBWEAANerR.jpg'},
    {id:1, pathImage:'https://pbs.twimg.com/media/Em1JwzBWEAANerR.jpg'},

    
]
 


export const Inicio = () => {

    const numColumns = 2;
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / numColumns;

  return (


    <View style={styles.container}>


        <CabeceraComponent/>

            <ScrollView style={{flex:1}}>

                <View style={styles.contentFlatlist}>

                    <View style={styleGlobal.contentTitleProducts}>
                        <Text style={styleGlobal.titleProducts}>Seccion de productos</Text>
                    </View>
                        <FlatList
                                
                                data={products}
                                horizontal
                                keyExtractor={item=>item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                decelerationRate={0.9}
                                renderItem={({item})=><CardProduct product={item} idCardNav={item.id}/>}
                                />
                </View>

                <View style={styles.contenImgPromo}>

                    <View style={{left:10,
                                ...styleGlobal.contentTitleProducts}}>
                        <Text style={styleGlobal.titleProducts}>Promociones</Text>
                    </View>

                    <FlatList
                                
                                data={promos}
                                horizontal
                                keyExtractor={item=>item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                decelerationRate={0.9}
                                renderItem={({item})=><CardPromos promos={item}/>}
                                />
                </View>

                <View>
                    <View style={{left:10,
                                    ...styleGlobal.contentTitleProducts}}>
                            <Text style={styleGlobal.titleProducts}>Los mejores combos</Text>
                    </View>
                    <FlatList 
                            data={combos}
                            numColumns={numColumns}
                            keyExtractor={item=>item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item})=>(
                                <View style={[styles.item, { width: itemWidth - 10 }]}>
                                  <CardCombos  combos={item} />
                                </View>
                              )}
                            /> 


                </View>
            </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#131313',
    },

    contentFlatlist:{
        padding:10,
    },
    contenImgPromo:{
        justifyContent:'center',
        alignItems:'center',
    },

    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        left:5
      },
})
import React, { useState } from 'react'
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CabeceraComponent } from '../../components/CabeceraComponent';
import { CardViveres } from './component/CardViveres';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { ModalCar } from './component/ModalCar';

export interface Vivere{
  id:number;
  name:string;
  pathImage:string;
  stock:number;
  price:number;
}

const viveres:Vivere[]=[
  {id:1, name:'Online Aceite Vegetal', pathImage:'https://d2o812a6k13pkp.cloudfront.net/Productos/40469402_0120220630134005.jpg', stock:0, price:3.40},
  {id:2, name:'Arroz Gustadina blanco', pathImage:'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg', stock:5, price:2.45},
  {id:3, name:'Harina YA de trigo', pathImage:'https://yayaya.com.ec/wp-content/uploads/2021/06/MONTAJE-1k-1.png', stock:5, price:1.20},
  {id:4, name:'Fideo lazo amancay 400g', pathImage:'https://almacenescorsa.com/wp-content/uploads/2021/07/Fideo-Lazo-Amancay-400g.jpg', stock:6, price:2.00},
  {id:5, name:'Tallarin rapidito', pathImage:'https://mhmarket.ec/wp-content/uploads/sites/2/2020/11/9600256.jpg', stock:7, price:2.99},
  {id:6, name:'Cereal Zucaritas', pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/27422_G.jpg', stock:10, price:3.45},
  {id:7, name:'Atun real', pathImage:'https://www.fybeca.com/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dwf07756a7/images/large/83719-ATUN-EN-ACEITE-DE-GIRASOL-REAL-240-G-PAQUETE.jpg?sw=1000&sh=1000', stock:3, price:1.35},
  {id:8, name:'Salsa de tomate', pathImage:'https://ileshop.com.ec/wp-content/uploads/2023/05/SALSA-DE-TOMATE-DOIW-PACK.jpg', stock:15, price:4.65},
  {id:9, name:'Mayonesa', pathImage:'https://d2o812a6k13pkp.cloudfront.net/Productos/40397244_0120230522135914.jpg', stock:14, price:0.45},
  {id:10, name:'Cafe Nescafe', pathImage:'https://mhmarket.ec/wp-content/uploads/sites/2/2020/11/9602456.jpg', stock:2, price:5.45},
]


export interface Car{
  id:number;
  name:string;
  price:number;
  quantity:number;
}


export const Viveres = () => {

  const [viveresState, setViveresState] = useState(viveres);

  const handlerChangeStockViveres=(idViveres: number, quantity: number)=>{
    const updateStock=viveresState.map(item=>item.id == idViveres
      ?{...item, 
        stock:item.stock-quantity}
      :item);

      setViveresState(updateStock);
      
      addViveres(idViveres, quantity)
  }


  const [cars, setCars] = useState<Car[]>([]);

  const addViveres=(idViveres:number, quantity:number)=>{
      const viveres=viveresState.find((item)=>item.id == idViveres);

      if(!viveres){
        return;
      }

      const newCar: Car={
        id:viveres.id,
        name:viveres.name,
        price:viveres.price,
        quantity:quantity
      }

      setCars(prevCars=>[...prevCars, newCar])

      
  }


  const [showModal, setShowModal] = useState(false);



  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / numColumns;



  
  return (
    <View style={styles.container}>
        <StatusBar 
              backgroundColor="transparent" 
              translucent={true} 
            />
          <CabeceraComponent/>


            <View>
              <Text style={styles.titleViveres}>Viveres</Text>
            </View>

            <View style={styles.contentFlatlist}>
                <FlatList
                        data={viveresState}
                        numColumns={numColumns}
                        keyExtractor={item=>item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=>(
                        <View style={[styles.item, { width: itemWidth - 10 }]}>
                            <CardViveres  viveres={item}handlerChangeStockViveres={handlerChangeStockViveres} />
                        </View>
                        )}
                        />
             </View>


          <TouchableOpacity style={styles.iconContainer}>   
              <Icon
                  style={{padding:13}}
                  name='shopping-cart' color={'#F39C12'} size={50} 
                  onPress={()=>setShowModal(!showModal)}/>
              <Text style={styles.textIconCar}>{cars.length}</Text>
          </TouchableOpacity>        
          <ModalCar cars={cars} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} />
    </View>
  )
}

const styles=StyleSheet.create({

  container: {
    flex:1,  
    backgroundColor:'#fff'  
  },

  item: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    left:2,
  },

  contentFlatlist:{
    padding:10,
    flex:1
  },
  
  titleViveres:{
    fontSize:30,
    color:'#000',
    textAlign:'center',
    top:10,
    borderBottomColor:'#000',
    borderBottomWidth:1,
    borderRadius:50, 
    fontWeight:'bold',
  },

  iconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor:'#212F3C',
    borderRadius:50
  },

  textIconCar:{
    position:'absolute',
    top:17,
    left:32, 
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  }
})
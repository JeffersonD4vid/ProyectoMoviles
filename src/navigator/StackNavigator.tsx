import { createStackNavigator } from '@react-navigation/stack';
import { Bienvenido } from '../screem/Bienvenido';
import { Login } from '../screem/Login';
import { Registro } from '../screem/Registro';
import { Inicio } from '../screem/InicioScreem/Inicio';
import { useState } from 'react';
import { TabNavigator } from './TabNavigator';
import { Viveres } from '../screem/viveresScreem/Viveres';
import { ProductosSecos } from '../screem/pSecosScreem/ProductosSecos';
import { ProductosConge } from '../screem/pCongeladosScreem/ProductosConge';
import { Lacteos } from '../screem/lacteosScreem/Lacteos';
import { Embutidos } from '../screem/embutidosScreem/Embutidos';
import { Snacks } from '../screem/snacksScreem/Snacks';
import { Bebidas } from '../screem/bebidasScreem/Bebidas';
import { Limpieza } from '../screem/limpiezaScreem/Limpieza';

export type RootStackParamList={
  Bienvenido:undefined,
  Login:undefined,
  Registro:undefined,
  Inicio:undefined
}

//Datos de prueba
export interface User{
  id:number,
  username:string,
  phone:string,
  email:string,
  password:string
}

const users:User[]=[
  {id:1, username:'Jefferson', phone:'0994088333', email:'jefferson@gmail.com', password:'123456'},
  {id:2, username: 'David', phone:'0994088333', email:'david@gmail.com', password:'1234567'}
]


const Stack = createStackNavigator();

export const StackNavigator=()=> {

  const [userLogin, setUserLogin] = useState(users);

  const handlerAddUser=(user:User)=>{
    setUserLogin([...userLogin, user])
  }

  return (
    <Stack.Navigator>
        <Stack.Screen name='Bienvenido'  options={{headerShown:false}} component={Bienvenido} />
        <Stack.Screen name="Login" options={{headerShown:false}} children={()=><Login users={userLogin}/>} />
        <Stack.Screen name="Registro"  options={{headerShown:false}} children={()=><Registro userLogin={userLogin} setUserLogin={handlerAddUser} />} />
        <Stack.Screen name='Inicio' options={{headerShown:false}} component={TabNavigator}/>
        <Stack.Screen name='Viveres' component={Viveres}/>
        <Stack.Screen name='ProductosSecos' component={ProductosSecos}/>
        <Stack.Screen name='ProductosConge' component={ProductosConge}/>
        <Stack.Screen name='Lacteos' component={Lacteos}/>
        <Stack.Screen name='Embutidos' component={Embutidos}/>
        <Stack.Screen name='Snacks' component={Snacks}/>
        <Stack.Screen name='Bebidas' component={Bebidas}/>
  <Stack.Screen name='Limpieza' component={Limpieza}/>
    </Stack.Navigator>
  );
}
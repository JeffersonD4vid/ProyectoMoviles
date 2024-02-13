import { createStackNavigator } from '@react-navigation/stack';
import { Bienvenido } from '../screem/Bienvenido';
import { Login } from '../screem/Login';
import { Registro } from '../screem/Registro';
import { Inicio } from '../screem/Inicio';

export type RootStackParamList={
  Bienvenido:undefined,
  Login:undefined,
  Registro:undefined,
  Inicio:undefined
}


const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Bienvenido" options={{headerShown:false}} component={Bienvenido} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
}
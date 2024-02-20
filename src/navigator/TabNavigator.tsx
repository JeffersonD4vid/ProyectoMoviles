import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicio } from '../screem/InicioScreem/Inicio';
import { Settings } from '../screem/Settings';
import { Carrito } from '../screem/Carrito';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Search } from '../screem/Search';
import { View } from 'react-native';



const Tab = createBottomTabNavigator();

export const TabNavigator =()=> {
  return (
    <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#28B463', // Color del ícono y texto cuando está activo
                    tabBarInactiveTintColor: '#fff', // Color del ícono y texto cuando está inactivo
                    tabBarStyle:{
                            backgroundColor:'#0B0E0F', 
                            borderTopWidth: 2, 
                            borderTopColor: 'grey'},                                                   
                        }}
                
                >
      <Tab.Screen
                name="Inicio" 
                component={Inicio} 
                options={{
                    headerShown:false,
                    tabBarIcon:({color})=>
                        <Icon name='home'  color={color} size={25} />                                                
                }}
                
                />
      <Tab.Screen 
                name="Settings" 
                component={Settings}
                options={{
                    headerShown:false,
                    tabBarIcon:({color})=>
                        <Icon name='brightness-5'  color={color} size={25} />
                               
                }} 
                />
      <Tab.Screen 
                name="Carrito" 
                component={Carrito} 
                options={{
                    headerShown:false,
                    tabBarIcon:({color})=>
                        <Icon name='cart-outline'  color={color} size={25} />
                              
                }}
                />
        
        <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    headerShown:false,
                    tabBarIcon:({color})=>
                        <Icon name='magnify'  color={color} size={25} />
                              
                }}
                />
    </Tab.Navigator>
  );
}
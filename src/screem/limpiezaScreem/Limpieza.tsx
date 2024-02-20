import React from 'react'

//Limpieza
export interface Limpieza{
    id:number;
    name:string;
    pathImage:string;
    stock:number;
    price:number;
}
const limpieza:Limpieza[]=[
    {id:1, name:'Online Aceite Vegetal Palma de Oro 750 ml', pathImage:'https://d2o812a6k13pkp.cloudfront.net/Productos/40469402_0120220630134005.jpg', stock:5, price:10},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
    {id:2, name:'', pathImage:'', stock:5, price:2.45},
]


export const Limpieza = () => {
  return (
    <div>Limpieza</div>
  )
}

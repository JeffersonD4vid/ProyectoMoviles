import React from 'react'

//Snacks

export interface Snack{
    id:number;
    name:string;
    pathImage:string;
    stock:number;
    price:number;
}

const snacks:Snack[]=[
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


export const Snacks = () => {
  return (
    <div>Snacks</div>
  )
}
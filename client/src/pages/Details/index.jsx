import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const [products,setProducts]=useState([]);
    const {id}=useParams()
    useEffect(()=>{
        const data = async()=>{
            const response= await axios.get(`http://localhost:3001/api/fas/${id}`)
            setProducts(response.data)
        }
        data()
    },[])
  return (
    <div>
        <h1>{products.name}</h1>
        <img src={products.img}></img>
        <span>{products.price}</span>
        <span>{products.desc}</span>
      
    </div>
  )
}

export default Details

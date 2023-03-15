import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import React from 'react'
import Cardetail from '../components/Cardetail'

export default function PostSingle(){
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    

    useEffect(() => {
        
        async function getCar(){
        try{
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setCar(data)
        } catch(err){
            setError(true)
        }
        }
        getCar()
    }, [id])

    return(
        <div>
        <h1>Car Information {id}</h1>
        {
        error ?
        <h1>404 - Not Found!</h1> :
        <></>
        }
        <Cardetail car={car} hideLink={true}/>
         
        </div>
    )
}
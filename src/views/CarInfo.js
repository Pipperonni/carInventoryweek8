import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import React from 'react'
import Cardetail from '../components/Cardetail'
import { DataContext } from "../contexts/DataProvider";


export default function CarInfo(){
    const { id, uid } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    const { getCar } = useContext(DataContext)
    
    

    useEffect(() => {
        async function handleLoad(){
            try{
                const data = await getCar(uid, id)
                setCar(data)
            } catch(err){
                setError(true)
            }
        }
        handleLoad()
    }, [])

    return(
        <div>
        <h1>Car Information</h1>
        {
        error ?
        <h1>404 - Not Found!</h1> :
        <></>
        }
        <Cardetail car={car} hideLink={true}/>
         
        </div>
    )
}
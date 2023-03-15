import { useState, useEffect } from 'react'
import Cardetail from '../components/Cardetail';


export default function Inventory(){
    const [cars, setCars] = useState([])

    useEffect(() => {   
        async function getCars(){
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()
            setCars(data)
        }
        getCars()
    }, [])

    return(
        <div>
            <h1 className="inventoryTitle">Inventory</h1>
            {cars.map((car) => <Cardetail car={car} key={car.id}/>)}
        </div>
    )
}
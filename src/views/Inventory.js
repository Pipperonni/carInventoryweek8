import { useState, useEffect, useContext } from 'react'
import Cardetail from '../components/Cardetail';
import { DataContext } from "../contexts/DataProvider"


export default function Inventory(){
    const { cars } = useContext(DataContext)
    return(
        <div>
            <h1 className="inventoryTitle">Inventory</h1>
            <div className="allCarsBox">
            {cars.map((car) => <Cardetail car={car} key={car.id}/>)}
            </div>        
        </div>
    )
}
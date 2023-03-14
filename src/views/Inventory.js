import { useState } from 'react'
import Cardetail from '../components/Cardetail';



export default function Inventory() {
    const [counters, setCounters] = useState([
        {
            title: 'GT',
            initialCount: 7,
            image: 'images/car/mgt.jpg'
        },
        {
            title: '765LT SPIDER',
            initialCount: 4,
            image: 'images/car/m765lts.jpg'
        },
        {
            title: '720S SPIDER',
            initialCount: 5,
            image: 'images/car/m720ss.jpg'
        },
        {
            title: 'ELVA',
            initialCount: 1,
            image: 'images/car/melva.jpg'
        },
        {
            title: '1994 F1',
            initialCount: 1,
            image: 'images/car/mf1.jpg'
        }
    ])


    return (
        <div className="App">
            {
                counters.map((counter) => <Cardetail title={counter.title} initialCount={counter.initialCount} image={counter.image} />)
            }
        </div>
    );
}
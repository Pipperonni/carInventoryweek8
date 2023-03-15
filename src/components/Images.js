import Cardetail from './Cardetail'
import { useState } from 'react'


export default function Images(){
    const [images1, setImages1] = useState([
        {
            pic: '/images/cars/m720ss.jpg'
        },
        {
            pic: '/images/cars/m765lts.jpg'
        },
        {
            pic: '/images/cars/melva.jpg'
        },
        {
            pic: '/images/cars/mf1.jpg'
        }
    ])
    return(
        <div>
            {
                images1.map((image) => <Cardetail pic={image.pic}/>)

            }
        </div>
    )
}



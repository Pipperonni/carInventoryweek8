import { Link } from 'react-router-dom'

export default function Cars(props){
    
    return(
        <div className="infoBox">
        <div className="App">
            {/* <img className="imageCar" src={props.pic}/> */}
            <p className="pInfo">{props.car.name}</p>
            <p className="pInfo">Year: {props.car.year}</p>
            <p className="pInfo">Selling Price: {props.car.selling_price}</p>
            {
                (props.hideLink) ?
                <>
                <p className="pInfo">Km Driven: {props.car.km_driven}</p>
                <p className="pInfo">Fuel: {props.car.fuel}</p>
                <p className="pInfo">Seller Type: {props.car.seller_type}</p>
                <p className="pInfo">Transmission: {props.car.transmission}</p>
                <p className="pInfo">Owner: {props.car.owner}</p>
                <p className="pInfo">Transmission: {props.car.mileage}</p>
                <p className="pInfo">Engine: {props.car.engine}</p>
                <p className="pInfo">Max Power: {props.car.max_power}</p>
                <p className="pInfo">Torque: {props.car.torque}</p>
                <p className="pInfo">Seats: {props.car.seats}</p>
                </>
                 :
                <Link className="moreInfo" to={ `/cars/${props.car.id}` }>More Info</Link>
            }
        </div>
        </div>
    )
}
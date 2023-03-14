import { useState } from 'react'



export default function Counter(props){
    console.log(props)
    const [count, setCount] = useState(props.initialCount  || 0)

    function incerment(incrementor){
        setCount(count+incrementor) 
    }

    
    return (
        
        <div class='carInventory'>
            
            <h2 class="carTitle">{props.title || 'Counter'}</h2>
            <p class="counterTitle">In Stock: { count }</p>
            
            <div>
                <button class="btn" onClick={() => incerment(1)}>Incerment</button>
                {
                    (count > 0) ?
                    <button class="btn" onClick={() =>incerment(-1)}>Decerment</button>
                    :
                    <></>
                }
            </div>
        </div>
        
    ) 
}
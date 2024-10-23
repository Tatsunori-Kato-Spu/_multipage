// import styles
import { useState } from 'react'
import './Counter.css'

const Counter = (props) => {
    // let value = props.value;
    
    // getter and setter
    const [value, setValue] = useState(props.value || 0);
        
        
        const decrement = () => {
            setValue(value - 1);
        }
        
        const increment = () => {
            setValue(value + 1);
        }
        
        
    // render
    return (
        <div className='container-container'>
        <div className='containerBox'>
            <h3 className='counter-title'>{props.name || "Counter"}</h3>
            <div>
                <button className='btn button btn-danger' onClick={decrement}> -1 </button>
                <span className='count value'> {value} </span>
                <button className='btn button btn-success' onClick={increment}> +1 </button>
            </div>
        </div>
     </div>
    );
}

export default Counter;
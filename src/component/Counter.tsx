import {useState} from "react";
import './Counter.scss'
export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={()=>setCounter(c=>c+1)}>+</button>
            {counter}
            <button onClick={()=>setCounter(c=>c-1)}>-</button>
        </div>
    )
}
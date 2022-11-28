import {useState} from "react";
import styles from "./Counter.module.scss";
import './style.scss'
export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.btn}>
            <button onClick={()=>setCounter(c=>c+1)}>+</button>
            {counter}
            <button className="btn1" onClick={()=>setCounter(c=>c-1)}>-</button>
        </div>
    )
}
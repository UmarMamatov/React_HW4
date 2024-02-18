import React, {useState} from 'react';
import classes from "./Count.module.css";

const Count = () => {
    const [count,setCount] = useState(0)
    const handleCountPlus = ()=>{
        setCount(count+1)
    }
    const handleCountMinus = ()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    return (
        <div className={classes.wrapper}>
            <p>Count: {count}</p>
            <button onClick={handleCountPlus}>increment</button>
            <button onClick={handleCountMinus}>decrement</button>
        </div>
    );
};

export default Count;
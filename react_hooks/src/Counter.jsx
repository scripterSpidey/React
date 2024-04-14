import React, {useState} from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(count+1)
    }

    const decrementCount = () =>{
        setCount(count-1)
    }
    const resetCount = () =>{
        setCount(0)
    }
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
            <button onClick={resetCount}>Reset</button>
        </>
    )
}

export default Counter;
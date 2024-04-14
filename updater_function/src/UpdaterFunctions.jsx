import React,{ useState } from "react";


const UpdaterFunction = () =>{

    const [count,setCount] = useState(0);
    const increment = () =>{
        /**
         *  setCount(count+1);
         *   setCount(count+1);
         *   setCount(count+1);
         *   sets count to 1 \three times
         *   setCount(count+2);
         *   sets count to 2 ome time
         *
         *   React batches together these updates and performs a single operation atlast
         *   which is: setCount(0+2); The result will be 2.
         */

        /**
         * we need to create a new function inside the set function and the variable name
         * should be different from the declared state name.
         * we takes the pending state to calculate the next state. In previous method
         * we were using current state over and over again.
         * Reacts puts these updater functions in a que
         */
            setCount(prevCount => prevCount+1)
            setCount(prevCount => prevCount+1)
    }

    const decrement = ()=>{
        setCount(count-1);
    }
    return (
        <>
            <div>
                <button onClick={increment}>+</button>
                <p>Count: {count} </p>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default UpdaterFunction;
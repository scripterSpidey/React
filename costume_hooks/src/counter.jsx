import React,{useState} from "react";
import useDocTitle from "./costumeHooks/useDocTitle";

function Counter(){

    const [count,setCount] = useState(0);
    useDocTitle(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>ADD</button>
        </div>
    )
}

export default Counter;
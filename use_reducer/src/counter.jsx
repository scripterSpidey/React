
import React,{useReducer} from "react";

// const initialState = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

function Counter(){

    const [count,dispatch] = useReducer(reducer,0)

    return(<>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>Add</button>
        <button onClick={()=>dispatch('decrement')}>Substract</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </>)
}

export default Counter;
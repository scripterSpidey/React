
import React,{useReducer} from "react";

// const initialState = 0;



function Counter(){

    const initialState = 0;
   
    const [count,dispatch] = useReducer(reducer,initialState)
    
    function reducer(currentState,action){
        
        if(action=='add') return currentState+1;
        if(action =='subtract') return currentState-1;
        return 0;
    }

    return(<>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('add')}>Add</button>
        <button onClick={()=>dispatch('subtract')}>Substract</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </>)
}

export default Counter;
import React from 'react'
import { useReducer } from 'react';
const Counter2 = () => {
    const initialState = {
        firstCount:0
    };
   
    const [count,dispatch] = useReducer(reducer,initialState)
    
    function reducer(currentState,action){
        
        if(action.type=='add') return {firstCount:(currentState.firstCount+action.value)};
        if(action.type =='subtract') return {firstCount:currentState.firstCount-action.value};
        return {firstCount:0};
    }

    return(<>
        <h1>{count.firstCount}</h1>
        <button onClick={()=>dispatch({type:'add', value:1})}>Add</button>
        <button onClick={()=>dispatch({type:'subtract',value:1})}>Substract</button><br />
        <button onClick={()=>dispatch({type:'add',value:2})}>Add 2</button> 
        <button onClick={()=>dispatch({type:'subtract',value:2})}>Substract 2</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>)
}

export default Counter2

import React,{useState,useRef,useEffect} from "react";

function Counter(){
    
    const [count,setCount] = useState(0)
    //when we use useRef it doesnt rerenders the component when the value changes
    const ref = useRef(0);
    useEffect(()=>{
        //if we set the count like this , then there will infinit amount of re-renders
        //since the react renders when a state is changed
        //?setCount(c=>c+1);
        ref.current = ref.current + 1;
        console.log(ref.current)
    })

    function addCount(){
        setCount(c=>c+1);
    }
    return(<>
        <h1>render count: {ref.current}</h1>
        <h1>adding count: {count}</h1>
        <button onClick={addCount} >Add</button>
        <p></p>
    </>)
}

export default Counter; 
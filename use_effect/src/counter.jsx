import React,{useState,useEffect} from "react"


function Counter(){
    const [count,setCount] = useState(0);
    const [color,setColor]= useState('green')
    useEffect(()=>{
        document.title = count+' '+color;
    },[count])
    // when the state of count changes, execute the callback in useEffect
    function addCount(){
        setCount(c=>c+1);
    }

    function subtract(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setColor(co => co === 'green' ? 'red' : 'green');
    }
    return (
        <>  
            <p style={{color:color}}>{count}</p>
            <button onClick={addCount}>ADD</button>
            <button onClick={subtract}>SUB</button><br />
            <button onClick={changeColor}>change Color</button>
        </>
    )
}

export default Counter;
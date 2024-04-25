import React,{useEffect,useMemo,useState} from "react";

function DoubleNum(){


    const [number,setNumber] = useState(1);
    const[color,setColor] = useState('white');

    const doubleNum = useMemo(()=>{
        for(let i=0;i<1000000000;i++){}
        return number*2;
    },[number]) 

    function changeColor(){
        color =='white' ? setColor('red'): setColor('white')
    }

    return(<>
        <input onChange={(e)=>setNumber(e.target.value)}   type="number" />
        <h1>{doubleNum}</h1>
        <input type="text" style={{backgroundColor:color}} />
        <button onClick={changeColor}>changecolor</button>
    </>)
}

export default DoubleNum;
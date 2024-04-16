import React,{useEffect,useMemo,useState} from "react";

function DoubleNum(){


    const [number,setNumber] = useState(1);
    const[color,setColor] = useState('white')
    function slowFunction(event){
        const newNum = event.target.value;
        for(let i=0;i<1000000000;i++){}
        setNumber(preNum=>newNum*2)
    }

    return(<>
        <input onChange={()=>slowFunction(event)}   type="number" />
        <h1>{number}</h1>
        <input type="text" style={{backgroundColor:color}} />
        
    </>)
}

export default DoubleNum;
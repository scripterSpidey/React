import React,{useState} from "react";

const Array  = () =>{

    const [items, setItem] = useState(['apple','chicken','car'])
    const addElements = (event)=>{
        const newItems = document.getElementById('idInput').value.split(',');
        setItem(prevItems => [...prevItems,...newItems])
    }

    const removeItem =(i)=>{
        setItem(items.filter((_,ind)=>ind !== i))
    }
    return (
        <>
            <div>
                <h2>Items</h2>
                <ul>
                    {items.map((item,i) => <li key={i}  onClick={()=>removeItem(i)}>{item}</li>)}
                    <input type="text" placeholder="seperate your elements with a comma" id='idInput' />
                    <button onClick={addElements}>Add </button>
                </ul>
            </div> 
        </>
    )
}

export default Array;
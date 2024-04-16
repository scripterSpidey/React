import React,{useEffect,useState,useRef} from "react";

function HtmLElement(){

    const [name,setName] = useState('');
    const inputRef = useRef()

    useEffect(()=>{
        console.log('Component rendered')
    })

    function focusInput(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor  = 'red';
    }
    return(<>
        {/* This will set the inputRef's current == input element */}
        <input ref={inputRef} type="text" onChange={e=>setName(e.target.value)} />
        <h2>{name}</h2>
        <button onClick={focusInput}>Focus</button>
    </>)
}

export default HtmLElement;
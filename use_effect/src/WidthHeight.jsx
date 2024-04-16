import React, {useState, useEffect} from "react";

function SizeDisplay(){
    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);
    //if we do with the general method , then this eventListener will be added everytime 
    //when a change happens. Thats not good. We just need to add only once and react will
    //track the changes
    //?window.addEventListener('resize',resize);

    useEffect(()=>{
        window.addEventListener('resize',resize);
        // after the execution, when unmounting, we have to remove the eventListener from
        //the component, other wise the document might have unexpected behaviours.
        //we remove it by an return statement
        return ()=>{
            window.removeEventListener('resize',resize)
        }
    },[])
    function resize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p>Width: {width}</p>
            <p>Heiht: {height}</p>
        </>
    )
}

export default SizeDisplay
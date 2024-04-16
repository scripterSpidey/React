import React,{useEffect, useState} from "react";


function PersonalData(){
    const [userData,setUserData] =  useState([])
    const [count,setCount] = useState(1);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.log('fetching eroor',error))
    },[count])

    function nextPerson(){
        if(count<10){
            setCount(prevCount => count+1)
        }
    }

    function prevPerson(){
        if(count>0){
            setCount(prevCount => prevCount-1)
        }
    }

    return(<>
        <div>
            <h1>{userData.name}</h1>
            <h4>{userData.email}</h4>
        </div>
        <button onClick={nextPerson}>Next Person</button>
        <button onClick={prevPerson}>Prev Person</button>
    </>)
}

export default PersonalData;
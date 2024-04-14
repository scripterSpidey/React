import React,{useState} from "react";

function MyComponent(){
    let  [name, setName] = useState('Guest');
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false)
    const updateName = ()=>{
        //? name = 'Ahammed'; 
        //? normal variables wont set this to assigned name, thats were
        //? react hooks are usefull
        setName('Ahammed');
    }

    const updateAge = ()=>{
        setAge(age+1);
    }

    const updateEmployment= () =>{
        setIsEmployed(!isEmployed)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>
            <p>is Employed : {isEmployed? 'yes' : 'No'}</p>
            <button onClick={updateEmployment}>change employement</button>
        </div>
    )
}

export default MyComponent;
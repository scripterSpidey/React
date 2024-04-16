import React,{useState,createContext} from "react";
import ComponentB from "./ComponentB";
import ParallelComponent  from "./ParallelComponent";
export const UserContext = createContext();

function ComponentA(){
    const[user,setUser] = useState('Ahammed')
    return(<>
        <div className="box">
            <h1>Component A</h1>
            <h2>welcome {user}. Go to B</h2>
            {/* <ComponentB user = {user}></ComponentB> */}
            {/* This is a lengthy process , passing props to another component and accessing them */}
            <UserContext.Provider value={user}>
                <ComponentB ></ComponentB>
                <ParallelComponent></ParallelComponent>
            </UserContext.Provider>
            <ParallelComponent></ParallelComponent>
            {/* This component will not receive the value */}
        </div>
    </>)
}

export default ComponentA
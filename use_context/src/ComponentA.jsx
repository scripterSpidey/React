import React,{useState,createContext} from "react";
import ComponentB from "./ComponentB";
import ParallelComponent  from "./ParallelComponent";


export const UserContext = createContext();
export const childContext = createContext()
function ComponentA(){
    const[user,setUser] = useState('Ahammed');
    const [child,setChild] = useState(true)

    return(<>
        <div className="box">
            <h1>Component A</h1>
            <h2>welcome {user}. Go to B</h2>
            {/* <ComponentB user = {user}></ComponentB> */}
            {/* This is a lengthy process , passing props to another component and accessing them */}
            <childContext.Provider value = {{child,setChild}}>
                <UserContext.Provider value={user}>
                    <div>{child? 'ahammed alive': 'ahammed dead'}</div>
                    <ComponentB ></ComponentB>
                    <ParallelComponent></ParallelComponent>
                </UserContext.Provider>
                <ParallelComponent></ParallelComponent>
            </childContext.Provider>
            {/* This component will not receive the value */}
        </div>
    </>)
}

export default ComponentA
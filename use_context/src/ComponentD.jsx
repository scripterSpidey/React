import React,{useState,useContext} from "react";
import {UserContext} from './ComponentA'
import ChildToParent from "./ChildToParent";
function ComponentD(){

    const user = useContext(UserContext)
    return(<>
        <div className="box">
            <h1>Component D</h1>
            <h2> Bye {user}</h2>
            <ChildToParent/>
        </div>
    </>)
}

export default ComponentD
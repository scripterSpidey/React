import React,{useState,useContext} from "react";
import ComponentD from "./ComponentD";
import {UserContext} from './ComponentA'

function ComponentC(){
    const user = useContext(UserContext)
    return(<>
        <div className="box">
            <h1>Component C</h1>
            <h2>{user} Go to D</h2>
            <ComponentD></ComponentD>
        </div>
    </>)
}

export default ComponentC
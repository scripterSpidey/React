import React,{useState,useContext} from "react";
import ComponentC from "./ComponentC";
import {UserContext} from "./ComponentA";

function ComponentB(){

    const user = useContext(UserContext);
    console.log(UserContext)
    return(<>
        <div className="box">
            <h1>Component B</h1>

            <h2>{user} Got to C</h2>
            <ComponentC ></ComponentC>
        </div>
    </>)
}

export default ComponentB
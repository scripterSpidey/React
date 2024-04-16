import { useContext } from "react";
import {UserContext} from './ComponentA';

function ParallelComponent(){
    const parallelValue = useContext(UserContext);
    
    return (<>
    
        <h1> From parallel Component: {parallelValue}</h1>
    </>)
}

export default ParallelComponent;
# prop drilling: When we want to send datas to nested components, we will pass the from the parent component to the child, to the child, to the child etc... and access it from the inner child. This is ridiculous. Thats were useContext comes into effect

# useContext allows us to pass values through multiple level of components withous prop drilling them(passing throgh one by one component). We dont need to pass it through each level.

import {createContext} from 'react'

export const contextName = createContext();

function App(){
    return(
        <contextName.Provider value={value}>
            <inner_components>
        </contextName.Provider>
    )
}

from the component file:

import {useContext} from 'react'
import {<contextName>} from '<location>'

const <valueName> = useContext(<contextName>)

function name(){
    return (
        <h1> {<valueName>} </h1>
    )
}

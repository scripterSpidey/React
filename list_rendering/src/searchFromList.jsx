import React,{useState} from "react"

function SearchCountry(){

    const countries = ["india", "america", "japan"];
    const [country,setCountry] = useState('');
    // this will not work as expected since the filter returns boolean values
    // const foundCountry = countries.filter(cont=><li>{cont===country}</li>);
    const foundCountry = countries.filter((cont)=>{
        return cont.startsWith(country)
    });
    console.log(foundCountry)
    const found = foundCountry.map(f=><li key={f}>{f}</li>)
    function inputValue(event){
        setCountry(event.target.value)
    }
    return (<>
        <input type="text" onChange={inputValue} />
        <h1>Search Items</h1>
        <ol>
            {found}
        </ol>
    </>)
}

export default SearchCountry;
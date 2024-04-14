import React, {useState} from "react";

const ArrayOfObjects = ()=>{
    const [car,setCar] = useState([])
    const [brand,setBrand] = useState('');
    const[year,setYear] = useState(1990);
    const[model,setModel] = useState('');
    function addBrand(event){
        setBrand(event.target.value)
    }

    function addModel(event){
        setModel(event.target.value)
    }

    function addYear(event){
        event.target.value
    }   
    
    function addDetails(){
        const newCar = {
            brand: brand,
            model:model,
            yearOfMan: year
        }
        setCar(prevCar=>[...prevCar,newCar]);
        setBrand('');
        setModel('');
        setYear(0)
    }

    function removeCar(index){
        console.log('sdfds')
        setCar(prevCar =>car.filter((_,i)=>i!==index))
        
    }
    return (
        <>
            <h1>List of cars</h1>
            <ul>
                {car.map((cars,index)=><li key={index} onClick={()=>removeCar(index)}>{cars.brand}, {cars.model}, {cars.yearOfMan}</li>)}
            </ul>

            <input type="text" value={brand} onChange={addBrand} name="" id="" placeholder="brand"/>
            <input type="number" value={year} onChange={addYear} name="" id="" placeholder="year"/>
            <input type="text" value={model} onChange={addModel} name="" id="" placeholder="model"/>
            <button onClick={addDetails}>Add</button>
        </>
    )
}

export default ArrayOfObjects


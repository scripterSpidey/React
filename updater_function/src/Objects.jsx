import React,{useState} from "react";
const Cars = ()=>{

    const [car,setCar] = useState({
                            name:'Lamborgin',
                            price:5000000,
                            country:'Italy'
                        });
    
    const updateName = (event)=>{
        setCar(prevCar=>({
            ...prevCar,
            name: event.target.value
        }))
    }
    
    const updateCountry = (event)=>{
        setCar(prevCar=>({
            ...prevCar,
            country:event.target.value
        }))
    }
    
    const updatePrice = (event)=>{
        setCar(prevCar=>({
            ...prevCar,
            price:event.target.value
        }))
    }    
    return (
        <>
            <div>{car.name} from {car.country} costs {car.price}</div>
            <input type="text" onChange={updateName}  value={car.name}/> <br />
            <input type="text" onChange={updateCountry} value={car.country}/> <br />
            <input type="number" onChange={updatePrice} value={car.price} /> <br />
        </>
    )
}

export default Cars;
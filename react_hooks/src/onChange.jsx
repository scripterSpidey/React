import React,{useState} from "react";

const change = ()=>{
    const [name,setName] = useState('');
    const[comment,setComment] = useState('')
    const[payment,setPayment] = useState('')
    function updateChange(event){
        setName(event.target.value)
    }

    function handleCommnet(event){
        setComment(event.target.value)
    }

    function updatePayment(event){
        setPayment(event.target.value)
    }
    return (
        <div>
             <input value={name} onChange={updateChange} type="text" />
             <p>Name: {name}</p>

             <textarea onChange={handleCommnet} name="" id="" cols="30" rows="10" placeholder="enter your comment"></textarea>
             <p>comment: {comment}</p>

             <select onChange={updatePayment} name="" id="">
                <option value="cod">cod</option>
                <option value="online">online</option>
             </select>
             <p>{payment}</p>
        </div>
       
    )
}

export default change;
const Button = () =>{
    let count = 0;
    const event = (e) =>{
        if(count<5){
            count++;
            e.target.textContent = 'Oh yeah more'
        }else{
            e.target.textContent = 'Stop it!'
        }
    }
    return(
        <button onClick={(e)=>event(e)}>click here</button>
    )
}

export default Button;
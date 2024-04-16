import React,{useState,useEffect} from "react"

function DigitalClock(){
    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log('timer')
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meredium = hours >= 12 ? 'PM' : 'AM';
        hours =hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meredium}`
    }

    function addZero(number){
        return (number< 10 ? "0":"")+number;
    }
    return (<>
        <div className="clock_container">
            <div className="clock">
                <span className="time">{formatTime()}</span>
            </div>
        </div>
    </>)
}

export default DigitalClock
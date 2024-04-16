import React,{useState,useEffect,useRef} from "react"

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const[runningTime,setRunningTime] = useState(0)
    const startTime = useRef(0);

    useEffect(()=>{
        let stopWatchId;
        console.log('Component Rendered');
        if(isRunning){
            stopWatchId = setInterval(()=>{
                setRunningTime(Date.now() - startTime.current);
                console.log(runningTime)
            },10)
        }
        return()=>{
            console.log('interval',stopWatchId)
            clearInterval(stopWatchId)
        }
        
    },[isRunning])

    function formatTime(){

        let hours = Math.floor(runningTime/(1000*60*60));
        let mins = Math.floor((runningTime/(1000*60))%60);
        let secs = Math.floor((runningTime/1000)%60);
        let milliSecs = Math.floor(runningTime%1000)
        
        hours = String(hours).padStart(2,'0');
        mins = String(mins).padStart(2,'0')
        secs = String(secs).padStart(2,'0')
        milliSecs = String(milliSecs).padStart(3,'0');

        return `${hours}:${mins}:${secs}:${milliSecs}`
    }

    function start(){
        setIsRunning(true);
        startTime.current = Date.now()-runningTime;
    }

    function stop(){
        setIsRunning(false);
        startTime.current = 0;
    }

    function reset(){
        setRunningTime(0);
        setIsRunning(false)
    }
    return(<>
        <div className="stop_watch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start_btn">Start</button>
                <button onClick={stop} className="stop_btn">Stop</button>
                <button onClick={reset} className="reset_btn">Reset</button>
            </div>
        </div>
    </>)

}

export default StopWatch
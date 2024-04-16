import {useEffect} from "react";


function useDocTitle(count){
    useEffect(()=>{
        document.title = count
    },[count])
}

export default useDocTitle;
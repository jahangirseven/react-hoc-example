import React , {useEffect, useState} from "react";

const useSize = () =>{
    const [size,setSize] = useState({
        width: 0 , 
        height : 0 
    }) ; 

    const changeFunction = () =>{
        setSize({
            width: window.innerWidth , 
            height : window.innerHeight  
        })
    }
      
    useEffect(()=>{
        window.addEventListener('resize', changeFunction) ;

            return ()=>{
                window.removeEventListener('resize',changeFunction) 
            }
        
    },[]) 

    return size
     
}

export default useSize 
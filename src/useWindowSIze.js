import { useState,useEffect } from "react";



const useWindowSIze=()=>{
    const [windowSize,setWindowSize]=useState({
        weight:undefined,
        heigth:undefined,
    });

    useEffect(()=>{
        const handelResize=()=>{
            setWindowSize({
                width: window.innerWidth,
                heigth: window.innerHeight,

            });
        }
        handelResize()
        window.addEventListener("resize",handelResize)


        return()=>window.removeEventListener("resize",handelResize)
    },[])

    return windowSize ;
}


export default useWindowSIze;
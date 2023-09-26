import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {userContext} from "../authantion/userContext.js";


export const LoginProtact = ({children})=>{
    const {tokenData, setTokenData} = useContext(userContext)
    const data = JSON.parse(localStorage.getItem("userInfo"))
        useEffect(()=>{
            setTokenData(data)
        }, [])
        // console.log(data)
    return tokenData ? <Navigate to="/" /> : children
}

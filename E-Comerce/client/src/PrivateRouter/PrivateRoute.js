import {useContext} from "react"
import {Navigate } from "react-router-dom";
import { userContext } from "../authantion/userContext"



export const PrivateRoute = ({children})=>{
    const {tokenData} = useContext(userContext);
    if(tokenData){
        return children
    }

    return <Navigate to="/login" />
}
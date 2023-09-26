import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
// import { userContext } from '../authantion/userContext'
const AdminAuth = ({children}) => {
    const datas = JSON.parse(localStorage.getItem("userInfo"))
    console.log(datas)
    if(datas.role === 1){
        return children
    }else{
        return <Navigate to="/" />
    }
}

export default AdminAuth

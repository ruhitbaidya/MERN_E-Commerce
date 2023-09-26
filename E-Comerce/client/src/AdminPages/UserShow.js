import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const UserShow = () => {
    const token = localStorage.getItem("userAuth")
    const [userget, setUserGet] = useState("")
    const dataGet = ()=>{
        axios.post("http://localhost:3001/register/user/allUser", { token: `bearr ${token}` })
        .then((res)=>{
            setUserGet(res.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const deleteUser = (id)=>{
        axios.post(`http://localhost:3001/register/user/deleteUser`, {token: `bearr ${token}`, id : id})
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        dataGet()
    }, [])
  return (
    <div className="card p-3">
      <h1>User Show</h1>
      {
        userget && userget.map((req)=><p key={req._id} className="card p-3">Name : {req.name}<br/> ID : {req._id}<br/> Email : {req.email} <Link onClick={()=>deleteUser(req._id)}>Delete User</Link></p>)
      }
    </div>
  )
}

export default UserShow

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Catagory from '../AdminPages/Catagory'
import Product from '../AdminPages/Product'
import ShowAllProduct from '../AdminPages/ShowAllProduct'
import UserShow from '../AdminPages/UserShow'

const AdminDashboard = () => {
    const [componente, setComponent] = useState("")

    const HandelComponent = (text)=>{
        if(text == "category"){
            setComponent(text)
        }else if(text == "product"){
            setComponent(text)
        }else if(text == "user"){
            setComponent(text)
        }else if(text == "showProduct"){
            setComponent(text)
        }
        console.log(text)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md=12">
                    <p className="mt-3">Admin Dashboard</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item" onClick={()=>HandelComponent("product")}><NavLink >Create Product</NavLink></li>
                        <li className="list-group-item" onClick={()=>HandelComponent("showProduct")}><NavLink >show All Product</NavLink></li>
                        <li className="list-group-item" onClick={()=>HandelComponent("category")}><NavLink >Create Categaroy</NavLink></li>
                        <li className="list-group-item" onClick={()=>HandelComponent("user")}><NavLink >User Control</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    {componente == "category" ? <Catagory /> : ""}
                    {componente == "product" ? <Product /> : ""}
                    {componente == "user" ? <UserShow /> : ""}
                    {componente == "showProduct" ? <ShowAllProduct /> : ""}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard

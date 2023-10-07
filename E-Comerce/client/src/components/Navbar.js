import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom"
import { FaBabyCarriage } from "react-icons/fa6";
import { userContext } from '../authantion/userContext';
const Navbar = () => {
    const { user, tokenData, setTokenData, setUser } = useContext(userContext)
    const logOutFun = () => {
        localStorage.removeItem("userAuth")
        localStorage.removeItem("userInfo")
        setUser("")
        setTokenData("")
    }
    const datas = JSON.parse(localStorage.getItem("userInfo"))
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/"><FaBabyCarriage /> E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            {user ? (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {tokenData && tokenData.name.split(" ")[0]}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" onClick={logOutFun}>Logout</Link>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to={tokenData && tokenData.role === 1 ? "/dashboard-admin" : "/dashboard"}>Dasboard</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </>) : (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </>)}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

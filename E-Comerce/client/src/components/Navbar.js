import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom"
import { FaBabyCarriage } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { userContext } from '../authantion/userContext';
import SearchInput from '../pages/SeacheInput';
const Navbar = () => {
    const {card, setCard} = useContext(userContext)
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
                    <div className='mx-2 w-50'>
                        <SearchInput />
                    </div>
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
                            <li className="nav-item cardIcon">
                                <Link to="/card"> <FaShoppingCart />
                                {card.length > 0 ? (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {card.length}
                                    </span>) : ""}
                                    
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

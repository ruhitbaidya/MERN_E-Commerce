import React, { useState } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [text, setText] = useState({name: "", email : "", password : "", adders : "", phone : "", answar : ""})
    const navigate = useNavigate();
    const handelInput = (e) => {
        setText({
            ...text,
            [e.target.name] : e.target.value
        })
    }
    const sendData = ()=>{
        axios.post("http://localhost:3001/register/user/", text)
        .then((res)=>{
            console.log(res)
            toast.success("Successfully Register")
            navigate("/login")
            setText({name: "", email : "", password : "", adders : "", phone : ""})
        }).catch((error)=>{
            console.log(error)
            toast.error(" Register Failed Please Give Reall Information")
        })
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        sendData()
        console.log(text)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 my-4 p-3 size-design'>
                        <Toaster />
                        <h3 className='text-center'>Register Here</h3>
                        <hr className="border border-danger border-2 opacity-50"></hr>
                        <form onSubmit={handelSubmit}>
                            <div className='row'>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='name'>Name</label>
                                    <input type="text" name="name" value={text.name} className='form-control' placeholder='Enter Your Name' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" name="email" value={text.email} className='form-control' placeholder='Enter Your Email' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" name="password" value={text.password} className='form-control' placeholder='Enter Your Password' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='adders'>Adders</label>
                                    <input type="text" name="adders" value={text.adders} className='form-control' placeholder='Enter Your Adders' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input type="number" name="phone" value={text.phone} className='form-control' placeholder='Enter Your Phone' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='phone'>Answar</label>
                                    <input type="text" name="answar" value={text.answar} className='form-control' placeholder='Enter Your Farvirout Name' onChange={handelInput} />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register

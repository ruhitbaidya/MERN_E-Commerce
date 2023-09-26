import React, {useState} from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

import Footer from '../components/Footer'

const Login = () => {
    const [text, setText] = useState({email : "", password : ""})
    const navigate = useNavigate();
    const handelInput = (e) => {
        setText({
            ...text,
            [e.target.name] : e.target.value
        })
    }
    const sendData = ()=>{
        axios.post("http://localhost:3001/register/user/login", text)
        .then((res)=>{
            console.log(res.data.token)
            toast.success("Login Successfull")
            localStorage.setItem("userAuth", res.data.token)
            setTimeout(()=>{
                navigate("/")
            }, 2000)
            setText({ email : "", password : ""})
        }).catch((error)=>{
            console.log(error)
            toast.error("Login Failed please Give Valid Email And Password")
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
                    <div className='col-md-6 my-5 p-3 size-design'>
                        <Toaster />
                        <h3 className='text-center'>Login Here</h3>
                        <hr className="border border-danger border-2 opacity-50"></hr>
                        <form onSubmit={handelSubmit}>
                            <div className='row'>
                               
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" name="email" value={text.email} className='form-control' placeholder='Enter Your Email' onChange={handelInput}  />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <label htmlFor='password'>Passowrd</label>
                                    <input type="password" name="password" value={text.password} className='form-control' placeholder='Enter Your Password' onChange={handelInput}  />
                                </div>
                                <div className='col-md-12 my-2'>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </div>
                                <div className='col-md-12 my-2'>
                                    <div className="d-grid gap-2 text-center">
                                          <Link to="/forget-password">Forget Password</Link>
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

export default Login

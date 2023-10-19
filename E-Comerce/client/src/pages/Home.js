import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import Footer from '../components/Footer'
import { userContext } from '../authantion/userContext'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
  const { setUser, setTokenData, card, setCard } = useContext(userContext)
  let tokenGet = "";
  const navigate = useNavigate()
  const [findProduct, setFindProduct] = useState([])
  const verifyToken = () => {
    setUser(tokenGet)
    axios.post("http://localhost:3001/register/user/userVerify",
      { token: `bearr ${tokenGet}` })
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data.data))
        setTokenData(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  const getData = () => {
    axios.get(`http://localhost:3001/product/makeing/getAllProduct`)
      .then((res) => {
        setFindProduct(res.data.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    verifyToken()
    getData()
    tokenGet = localStorage.getItem("userAuth")
  }, [])
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-10'>
            <div className="card">
              <Toaster />
              <div className="card-body">
                <div className="row">
                  {
                    findProduct && findProduct.map((data) => {
                      return <div className='col-md-4 my-2' key={data._id}>
                        <div className="card homeCard">
                          <img src={`http://localhost:3001/${data.image}`} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.catagory}</p>
                            <Link className='btn btn-secondary ms-2'>Read More</Link>
                            <Link className='btn btn-primary' onClick={() => {
                              setCard([...card, data])
                              toast.success("your product added you card")

                              localStorage.setItem("cardItem", JSON.stringify([...card, data]))

                            }}>Add To Card</Link>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

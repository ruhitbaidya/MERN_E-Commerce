import React, { useContext, useEffect } from 'react'
import axios from "axios"
import Footer from '../components/Footer'
import { userContext } from '../authantion/userContext'
const Home = () => {
  const { setUser, setTokenData, tokenData } = useContext(userContext)
  const tokenGet = localStorage.getItem("userAuth")
  const verifyToken = () => {
    setUser(tokenGet)
    axios.post("http://localhost:3001/register/user/userVerify",
      { token: `bearr ${tokenGet}` })
      .then((res) => {
        console.log(res.data.data)
        localStorage.setItem("userInfo", JSON.stringify(res.data.data))
        setTokenData(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  console.log(tokenData)
  useEffect(() => {
    verifyToken()
  }, [])
  return (
    <div>
      <h1>Home</h1>

      <Footer />
    </div>
  )
}

export default Home

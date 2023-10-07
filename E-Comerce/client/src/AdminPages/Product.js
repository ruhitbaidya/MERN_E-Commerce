import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setData]= useState([])
  const getDatafromDB = () => {
    axios.get("http://localhost:3001/register/catagory/allCat/")
      .then((res) => {
        setData(res.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getDatafromDB()
  }, [])
  // console.log(data)
  return (
    <div className="card">
      <h3 className='card-header'>Create Product</h3>
      <div className='card-body'>
        <div className='row'>
          <div className='col-6'>
            <div>
              <select className="form-select" aria-label="Default select example">
                <option>Open this select menu</option>
                {data && data.map((cat)=>{
                  return <option value={cat.name} key={cat._id}>
                    {cat.name}
                  </option>
                })}

              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

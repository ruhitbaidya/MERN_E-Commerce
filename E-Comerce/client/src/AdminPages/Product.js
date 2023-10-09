import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Product = () => {
  const [storeData, setStoreData] = useState({ name: "", price: "", queantity: "", catagory: "", shipping : false })
  const [photo, setPhoto] = useState("")
  const [data, setData] = useState([])
  const getDatafromDB = () => {
    axios.get("http://localhost:3001/register/catagory/allCat/")
      .then((res) => {
        setData(res.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  const handelInput = (e)=>{
    setStoreData({
      ...storeData,
      [e.target.name] : e.target.value
    })
  }
  const tokenget = localStorage.getItem("userAuth")
  const sendData = (textData)=>{
    axios.post("http://localhost:3001/product/makeing/create-product", textData, {
      headers: {
        auth : `Bearer ${tokenget}`
        }
      })
    .then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const submitDataProduct = (e)=>{
    e.preventDefault();
    // name: "", price: "", queantity: "", catagory: "", shipping 
    const formData = new FormData();
    formData.append("photo", photo)
    formData.append("photoName", photo.name)
    formData.append("name", storeData.name)
    formData.append("price", storeData.price)
    formData.append("queantity", storeData.queantity)
    formData.append("catagory", storeData.catagory)
    formData.append("shipping", storeData.shipping)
    
    sendData(formData)
    console.log(storeData)
  }
  useEffect(() => {
    getDatafromDB()
  }, [])
  // console.log(data)
  return (
    <div className="card">
      <h3 className='card-header'>Create Product</h3>
      <div className='card-body'>
        <form onSubmit={submitDataProduct}>
          <div className='row'>
            <div className='col-md-6'>
              <select className="form-select" aria-label="Default select example" name="catagory" onChange={handelInput}>
                <option>Select Your Catagory</option>
                {data && data.map((cat) => {
                  return <option value={cat._id} key={cat._id}>
                    {cat.name}
                  </option>
                })}
              </select>
            </div>
            
          <div className="col-md-6">
            <label>Name</label>
            <input type="text" value={storeData.name} name="name" className="form-control" placeholder='Write Product Name' onChange={handelInput}/>
          </div>
          <div className="col-md-6">
            <label>Price</label>
            <input type="number" value={storeData.price} name="price" className="form-control" placeholder="Write Product Price" onChange={handelInput} />
          </div>
          <div className="col-md-6">
            <label>Queantity</label>
            <input type="number" value={storeData.queantity} name="queantity" className="form-control" placeholder="Write Product Queantity" onChange={handelInput} />
          </div>
          <div className="col-md-6">
            <label>Shipping</label>
            <select className="form-select" aria-label="Default select example" name="shipping" onChange={handelInput}>
                <option>Select Your Catagory</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="image" className=' mt-4'>
              <input type="file" name="photo" onChange={(e)=>{setPhoto(e.target.files[0])}} />
            </label>
          </div>
          <div className="col-md-3">
            <img className="img-fluid product-showImage" src={photo ? URL.createObjectURL(photo) : ""} alt="there was show product image" />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary mt-3">Create Product</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product

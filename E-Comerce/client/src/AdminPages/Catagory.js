import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Catagory = () => {
  const [name, setName] = useState({name : ""})
  const [data, setData] = useState("")
  const tokesfi = localStorage.getItem("userAuth")
  const setndDataCat = () => {
    axios.post("http://localhost:3001/register/catagory/createCat", { name: name.name, token: `brr ${tokesfi}` })
      .then((res) => {
        console.log(res)
        catfind()
      }).catch((error) => {
        console.log(error)
      })
  }
  const catfind = () => {
    axios.get("http://localhost:3001/register/catagory/allCat/")
      .then((res) => {
        console.log(res)
        setData(res.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  const deleteCatgory = (id) => {
    axios.post(`http://localhost:3001/register/catagory/deleteCat/user/${id}`, {token: `brr ${tokesfi}`}).then((res) => {
        console.log(res)
        catfind()
      }).catch((error) => {
        console.log(error)
      })
  }
  const updateCatagory = (id)=>{
    axios.get(`http://localhost:3001/register/catagory/singal-get/${id}`)
    .then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    setndDataCat()
    setName({name : ""})
    console.log(name)
  }
  useEffect(() => {
    catfind();
  }, [])
  return (
    <div className="card p-3">
      <h3>Create Catagory</h3>
      <form onSubmit={handelSubmit}>
        <input className="form-control" type="text" onChange={(e) => setName({name : e.target.value})} placeholder="Write Catagory Name" />
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      <div className='mt-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((cat) => {
              return <tr key={cat._id}>
                <td>{cat.name}</td>
                <td>
                  <Link className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" onClick={()=> updateCatagory(cat._id)}>Edit</Link>
                  <Link className='btn btn-danger mx-3' onClick={() => deleteCatgory(cat._id)}>Delete</Link>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
   <div>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Update Catagory</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-12">
              <label htmlFor="recipient-name" className="col-form-label">Update Field</label>
              <input type="text" className="form-control" id="recipient-name" placeholder='Write Catagory'/>
              <button type="submit" className='btn btn-primary mt-4'>Update Catagory</button>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Catagory

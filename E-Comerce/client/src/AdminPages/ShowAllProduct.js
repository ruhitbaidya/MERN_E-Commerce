import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ShowAllProduct() {
    const [product, setProduct] = useState("")
    const getData = () => {
        axios.get(`http://localhost:3001/product/makeing/getAllProduct`)
            .then((res) => {
                setProduct(res.data.data) 
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="card">
            <h1 className='card-header'>Show All Product</h1>
            <div className="card-body">
                <div className="row">
                    {
                        product && product.map((data) => {
                            return <div className='col-md-4' key={data._id}>
                                <div className="card">
                                    <img src={`http://localhost:3001/src/public/${data.photo}` }className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.catagory}</p>
                                        <Link to="" className="btn btn-primary">Edit</Link>
                                        <Link to="" className="btn btn-primary mx-3">Delete</Link>
                                    </div>
                                </div>

                            </div>

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowAllProduct

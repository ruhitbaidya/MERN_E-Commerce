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
    const findtoken = localStorage.getItem("userAuth")
    const deletefile = (id, imgurl) => {
        console.log(id)
        axios.post(`http://localhost:3001/product/makeing/deleteProduct/${id}`, { img: imgurl, token: `bee ${findtoken}` })
            .then((res) => {
                console.log(res)
                getData()
            }).catch((err) => console.log(err))

    }
    const allDataFindAndUpdate = ()=>{
        
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
                            return <div className='col-md-4 my-2' key={data._id}>
                                <div className="card homeCard">
                                    <img src={`http://localhost:3001/${data.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.catagory}</p>
                                        <Link to="" className="btn btn-primary mx-3" onClick={() => deletefile(data._id, data.image)}>Delete</Link>
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

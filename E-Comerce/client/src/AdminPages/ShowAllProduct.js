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
                                <div className="card">
                                    <img src={`http://localhost:3001/${data.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.catagory}</p>
                                        <Link data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" to="" className="btn btn-primary">Edit</Link>
                                        <Link to="" className="btn btn-primary mx-3" onClick={() => deletefile(data._id, data.image)}>Delete</Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowAllProduct

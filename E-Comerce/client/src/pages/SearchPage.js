import React, { useContext } from 'react'
import { userContext } from '../authantion/userContext'
import Footer from '../components/Footer'
import {Link} from "react-router-dom"
const SearchPage = () => {
    const { sproduct } = useContext(userContext)
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col-md-12'>
                        <div className="">
                            <div className="">
                                <div className="row">
                                    {
                                        sproduct && sproduct.map((data) => {
                                            return <div className='col-md-4 my-2' key={data._id}>
                                                <div className="card homeCard">
                                                    <img src={`http://localhost:3001/${data.image}`} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{data.name}</h5>
                                                        <p className="card-text">{data.catagory}</p>
                                                        <Link className='btn btn-secondary ms-2'>Read More</Link>
                                                        <Link className='btn btn-primary'>Add To Card</Link>
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
        </div>
    )
}

export default SearchPage

import axios from 'axios';
import React, { useContext, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../authantion/userContext';
const SearchInput = () => {
    const [search, setSearch] = useState("")
    const {setSProduct} = useContext(userContext)
    const navigator = useNavigate()
    const sentDataServer = async () => {
        axios.get(`http://localhost:3001/product/makeing/searchProduct/${search}`)
            .then((res) => {
                console.log(res.data.data)
                setSProduct(res.data.data)
                navigator("/search")
            }).catch((error) => {
                console.log(error)
            })
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        sentDataServer();
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder='Search Product' onChange={(e) => setSearch(e.target.value)} />
                    <button className="input-group-text" type="submit"><BiSearch /></button>
                </div>
            </form>
        </>
    )
}

export default SearchInput

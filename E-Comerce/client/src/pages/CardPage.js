import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../authantion/userContext'
const CardPage = () => {
    const { setCard, tokenData, card } = useContext(userContext)
    // const card = JSON.parse(localStorage.getItem("cardItem"))
    const totleMoneys = () => {
        try {
            let totleMoney = '';
            card && card.map((ids) => totleMoney = Number(totleMoney) + ids.price)
            return totleMoney.toLocaleString()
        } catch (error) {
            console.log(error)
        }
    }
    console.log(typeof (totleMoney))
    const navigate = useNavigate()
    const deleteCardItem = (index) => {
        card.splice(index, 1)
        localStorage.setItem("cardItem", JSON.stringify(card))
        navigate("/card")
        setCard([...card])
    }
    useEffect(() => {
        console.log(card)
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h3 className='py-3 text-center'>Hello {tokenData.name} Well Come to  Your Card</h3>
                <div className='col-md-7'>
                    {card.length > 0 ? (card.map((pid, index) => {
                        return <div className='card mb-2' key={pid._id}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className="img-fluid card-img" src={`http://localhost:3001/${pid.image}`} />
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Name : {pid.name}</p>
                                        <p>Price : {pid.price}</p>

                                        <button className="btn btn-danger" onClick={() => deleteCardItem(index)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })) : ("Your Card Empty")}
                </div>
                <div className='col-md-5'>
                    <h5>Check Out Your Paroduct</h5>
                    <h3>Total Price : {totleMoneys()} </h3>
                </div>
            </div>
        </div >
    )
}
export default CardPage

import React from 'react'
import { FaSadTear } from "react-icons/fa";
const Error = () => {
    return (
        <div className='error-div'>
            <div className='wrapperError'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <FaSadTear />
                            <h1 className='display-1'>404</h1>
                            <p>Page Not Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error

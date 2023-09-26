import React, { useState } from 'react'

const Contact = () => {
  const [info, setInfo] = useState({ name: "", email: "", phone: "", text: "" });
  const handelInput = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(info)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5">Contact Us</h1>
          <form onSubmit={handelSubmit}>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <label htmlFor="name">Enter Your Name</label>
                    <input className="form-control" type="text" name="name" value={info.name} onChange={handelInput} placeholder="Enter Your Name" />
                  </div>
                  <div className="col-md-12 my-2">
                    <label htmlFor="email">Enter Your Email</label>
                    <input className="form-control" type="email" name="email" value={info.email} onChange={handelInput} placeholder="Enter Your Email" />
                  </div>
                  <div className="col-md-12 my-2">
                    <label htmlFor="name">Enter Your phone</label>
                    <input className="form-control" type="number" name="phone" value={info.phone} onChange={handelInput} placeholder="Enter Your Phone" />
                  </div>
                  <div className="col-md-12 my-2">
                    <label htmlFor="name">Enter Your message</label>
                    <textarea className="form-control" name="text" type="text" value={info.text} onChange={handelInput} placeholder="Enter Your Message"> </textarea>
                  </div>
                  <div className="col-md-12">
                    <input className=" btn btn-primary form-control mt-3" type="submit" value="Submit" />
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact

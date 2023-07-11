import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAddressAction } from '../../actions/addressAction'

export default function AddContact() {
  const dispatch = useDispatch()
  const [address, setAddress] = useState({
    name:'',
    email:'',
    address:'',
    city:'',
    pin:null,
  })

  function handleChange(e){
    const {name,value} =e.target
    setAddress((prev)=>({...prev, [name]:value}))
  }
 function handleSubmit(e){
   e.preventDefault()
   dispatch(addAddressAction(address))
 }
  return (
    <div>
<div className="container">
  <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-25">
      <label for="name">NAME</label>
    </div>
    <div className="col-75">
      <input type="text" id="name" name="name" value={address.name} placeholder="Your name.." onChange={handleChange}/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="email">EMAIL</label>
    </div>
    <div className="col-75">
      <input type="text" id="email" name="email" value={address.email} placeholder="Your email.."onChange={handleChange}/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="address">ADDRESS</label>
    </div>
    <div className="col-75">
      <textarea id="address" name="address" value={address.address} placeholder="Write address.." style={{height:"200px"}} onChange={handleChange}></textarea>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="city">CITY</label>
    </div>
    <div className="col-75">
      <input type="text" id="city" name="city" value={address.city} placeholder="Your city.."onChange={handleChange}/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="pin">PIN</label>
    </div>
    <div className="col-75">
      <input type="number" id="pin" name="pin" value={address.pin} placeholder="Your pincode.."onChange={handleChange}/>
    </div>
  </div>
  
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
    </div>
  )
}

import React from 'react'

const ProfileData = () => {
  return (
    <>
    <div className="container">
        <div className="row">

            <p className='fs-4 fw-bold mt-5'>Profile</p>
            <div className="col">
            <img src="picture.png" alt="" className='mb-4' />
            <div className="row">
            <div className="col">

            <button className="btn btn-primary mb-4 mx-2">upload Image</button>
            <button className='btn btn-white mb-4 mx-2'>delete</button>
            </div>
            </div>
            </div>
        </div>
<div className="row">

            <div className="col-6">
                <label htmlFor="firstname"> Firstname</label>
                <input type="text" className="form-control mb-3" />
            </div>
            <div className="col-6">
                <label htmlFor="lastname"> Lastname</label>
                <input type="text" className="form-control mb-3" />
            </div>
</div>
<div className="row">
<div className="col-6">
                <label htmlFor="firstname"> Email</label>
                <input type="text" className="form-control mb-3" />
            </div>
            <div className="col-6">
                <label htmlFor="lastname"> Password</label>
                <input type="password" className="form-control mb-3" />
            </div>
</div>

<div className="row">
    <div className="col">
        <button className='btn btn-primary'>update</button>
    </div>
</div>

            
    </div>
    </>
  )
}

export default ProfileData
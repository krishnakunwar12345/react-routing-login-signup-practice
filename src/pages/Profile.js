import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <img className="p-2 profile-pic"
                  alt="profile pic"
                  src="https://images.unsplash.com/photo-1504203640717-b7d237a3dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhciUyMHdpdGglMjBib3l8ZW58MHx8MHx8fDA%3D"/>
                  <p className='ms-2 fs-5 fw-bold'>retik_kunwar</p>
                  <p className='ms-2 fs-5'>Retik Kunwar</p>
                  <p className='ms-2 fs-5'>Full Stack Devloper| Follow @retikkunwar</p>
                  <p className='ms-2 fs-5'>My portfolio on <a href="#">www.portfolio.com/retik</a></p>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
          <div className='d-flex justify-content-equal'>
            <div className='count-section pe-5 text-center fw-bold'>
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className='count-section px-5 text-center fw-bold'>
              <h4>20</h4>
              <p>Followers</p>
            </div>
            <div className='px-5 text-center fw-bold'>
              <h4>20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className='mx-auto'>
          <button className="custom-btn custom-btn-white me-md-3">
                        <span className="fs-6">Edit Profile</span>
                    </button>
          <button className="custom-btn custom-btn-white">
                        <span className="fs-6">Upload Post</span>
                    </button>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-12'>
          <hr/>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
        <div class="card">
        <img src="https://plus.unsplash.com/premium_photo-1681909704365-b73a7f2d50ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1lciUyMGJveXN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="baby"/>
        </div>
        </div>
        <div className='col-md-4 col-sm-12'>
        <div class="card">
        <img src="https://images.unsplash.com/photo-1605784900037-cd11748d487d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdpbnRlciUyMGJveXN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="snowhill"/>
        </div>
        </div>
        <div className='col-md-4 col-sm-12'>
        <div className="card">
          <img src='https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D' class="card-img-top" alt="van"/>
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
        <div class="card">
        <img src="https://plus.unsplash.com/premium_photo-1681909704365-b73a7f2d50ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHN1bW1lciUyMGJveXN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="baby"/>
        </div>
        </div>
        <div className='col-md-4 col-sm-12'>
        <div class="card">
        <img src="https://images.unsplash.com/photo-1605784900037-cd11748d487d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdpbnRlciUyMGJveXN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="snowhill"/>
        </div>
        </div>
        <div className='col-md-4 col-sm-12'>
        <div className="card">
          <img src='https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D' class="card-img-top" alt="van"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
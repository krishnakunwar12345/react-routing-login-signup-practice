import React from 'react'
import './Profile.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moreAction from "../images/more-action.PNG";
const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <img className="p-2 profile-pic"
                  alt="profile pic"
                  src="https://images.unsplash.com/photo-1504203640717-b7d237a3dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhciUyMHdpdGglMjBib3l8ZW58MHx8MHx8fDA%3D"/>
                  <p className='ms-2 fs-5 fw-bold'>kartik_kunwar</p>
                  <p className='ms-2 fs-5'>kartik Kunwar</p>
                  <p className='ms-2 fs-5'>Full Stack Devloper| Follow @kartikkunwar</p>
                  <p className='ms-2 fs-5'>My portfolio on <a href="#">www.portfolio.com/kartik</a></p>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
          <div className='d-flex justify-content-equal mx-auto'>
            <div className='count-section pe-4 pe-md-5 text-center fw-bold'>
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className='count-section px-4 px-md-5 text-center fw-bold'>
              <h4>20</h4>
              <p>Followers</p>
            </div>
            <div className='ps-md-5 ps-4 text-center fw-bold'>
              <h4>20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className='mx-auto mt-md-0 mt-4'>
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
        <div class="card" onClick={handleShow}>
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
      <>

      <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
          <div className='col-md-6'>
            <div>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1699115174617-7e49afc54da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1698248475785-e27cffa77776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="row">
              <div className="col-6 d-flex">
                <img
                  className="p-2 profile-pic"
                  alt="profile pic"
                  src="https://images.unsplash.com/photo-1504203640717-b7d237a3dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhciUyMHdpdGglMjBib3l8ZW58MHx8MHx8fDA%3D"
                />
                <div className="mt-2 ms-2">
                  <p className="fs-6 fw-bold">Title</p>
                  <p className="location">Description</p>
                </div>
              </div>

              <div className="col-6">
                <img
                  className="float-end fs-3 p-2 mt-2"
                  alt="more action"
                  src={moreAction}
                />
              </div>
              <div className="row">
            <div className="col-12">
              <span className="p-2 text-muted">2 Hours Ago</span>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12 ms-2'>
              <p>Lorem Ipsum</p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 d-flex ">
              <i class="ps-2 fs-4 fa-regular fa-heart"></i>
              <i class="ps-2 fs-4 fa-regular fa-comment"></i>
              <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>
            </div>

            <div className="col-12 mt-3 ms-2">
              <span className="fs-6 fw-bold">200 Likes</span>
            </div>
          </div>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
      </>
    </div>
  )
}

export default Profile
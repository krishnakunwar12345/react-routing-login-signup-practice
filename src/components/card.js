import React from "react";
import "./card.css";
import moreAction from "../images/more-action.PNG";
const card = () => {
  return (
    <div>
      <div>
        <div className="card shadow">
          <div className="card-body px-2">
            <div className="row">
              <div className="col-6 d-flex">
                <img
                  className="p-2 profile-pic"
                  alt="profile pic"
                  src="https://images.unsplash.com/photo-1504203640717-b7d237a3dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhciUyMHdpdGglMjBib3l8ZW58MHx8MHx8fDA%3D"
                />
                <div className="mt-2">
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
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <img
                style={{ borderRadius: "15px" }}
                className="p-2 img-fluid"
                alt="post pic"
                src="https://images.unsplash.com/photo-1524932871115-5fe23832511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbnRlciUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-6 d-flex ">
              <i class="ps-2 fs-4 fa-regular fa-heart"></i>
              <i class="ps-2 fs-4 fa-regular fa-comment"></i>
              <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>
            </div>

            <div className="col-6">
              <span className=" pe-4 fs-6 fw-bold float-end">200 Likes</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span className="p-2 text-muted">2 Hours Ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;

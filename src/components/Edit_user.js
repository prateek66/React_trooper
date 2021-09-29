import {React, useState, useEffect} from 'react'
import Footer from './Footer';
import { Link, useParams } from "react-router-dom";
import {API} from '../API';
import axios from 'axios';
function Edit_user() {
    const [input, setinput] = useState({
        name: "",
        email: "",
        phone_no: ""
    })
    const {userId} = useParams();
    const HandleInput = (e) => {
        setinput({ 
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const editInput = (e,type) => {
        const value = e.target.value

        switch (type) {
            case "name":
                HandleInput(e);
                break;
            case "email":
                HandleInput(e);
                break;
             case "phone":
                HandleInput(e);
                break;
        
            default:
                console.log("something wrong");
                break;
        }
    }

    const submitHandler = (e) => {
        //console.log(input);
       const response =  axios.patch(`${API}users/${userId}`, input).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        if(response) {
            alert("updated successfully!!! Go back now");
        }
        
    }
    return (
        <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}

          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Edit User_Directory</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      {/* <Link to="/dashboard">TellyTell</Link> */}
                    </li>
                    {/* <li className="breadcrumb-item">Commerce - Categories</li> */}
                    <li className="breadcrumb-item">Edit</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end page title --> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6">
                      <h1 className="text-left head-small">Edit User_Directory</h1>

                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                                
                              >User Name</label>
                              <input
                                onChange={(e) => editInput(e, "name")}
                                 value={input.name}
                                type="text"
                                name = "name"
                                className="form-control input-field"
                               // defaultValue={data}
                              />
                              <br />
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >User Email</label>
                              <input
                                 onChange={(e) => editInput(e, "email")}
                                 value={input.email}
                                type="text"
                                name = "email"
                                className="form-control input-field"
                               // defaultValue={data}
                              />
                                <br />
                             <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >User Contact_NO</label>
                              <input
                                 onChange={(e) => editInput(e, "phone")}
                                 value={input.phone_no}
                                 type="text"
                                 name = "phone_no"
                                 className="form-control input-field"
                               // defaultValue={data}
                              />
                              
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group text-left">
                                

                                <button
                                onClick={submitHandler}
                                type="button"
                                className="btn btn-success btn-login waves-effect waves-light mr-3"
                              >
                                Save
                              </button>
                                <a href='/'>
                              <button type="button" className="btn btn-primary add-btn waves-effect waves-light float-right">
														<i className="fa fa-plus" aria-hidden="true"></i> Back
													</button>
                                                    </a>
                              
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container-fluid --> */}
      </div>
      {/* <!-- End Page-content --> */}

      {/* <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <script>document.write(new Date().getFullYear())</script> © TellyTell.
                        </div>

                    </div>
                </div>
            </footer> */}
      <Footer />
    </div>
    )
}

export default Edit_user

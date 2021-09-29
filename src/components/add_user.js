import {React, useState, useEffect} from 'react'
import Footer from './Footer';
import {API} from '../API';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Add_user() {
    const [inputText, setinputText] = useState({
        name: "",
        email: "",
        phone_no: ""
    });

    const handleInputText = (e) => {
        setinputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
      };

    const submitHandler = (e) => {
       // e.preventDefault();
        console.log(inputText);
       // const {name,email,phone_no} = e.target;
        axios.post(`${API}users`,inputText).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
  const editHandler = (e,type) => {
      switch (type) {
          case "name":
              console.log("name");
              handleInputText(e);
              
              break;
              case "email":
                  console.log("email");
                handleInputText(e);
                
                break;
                case "phone":
                    console.log("phonee");
              handleInputText(e);
              
              break;
      
          default:
              console.log("plpl");
              break;
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
                <h4 className="mb-0">User Directory</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    {/* <li className="breadcrumb-item">
                      <Link to="/dashboard">TellyTell</Link>
                    </li> */}
                    {/* <li className="breadcrumb-item">Commerce - Categories</li> */}
                    <li className="breadcrumb-item">Add New</li>
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
                      <h1 className="text-left head-small">
                        Add New User{" "}
                      </h1>

                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Enter User Name
                              </label>
                              <input
                                type="text"
                                name= "name"
                                onChange={(e) => {
                                    editHandler(e, "name");
                                }}
                                value={inputText.name}
                                className="form-control input-field"
                                id="basicpill-phoneno-input"
                              />
                                    <br />

                             <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Enter User -Email
                              </label>
                              <input
                                type="text"
                                name = "email"
                                onChange={(e) => {
                                    editHandler(e, "email");
                                }}
                                value={inputText.email}
                                className="form-control input-field"
                                id="basicpill-phoneno-input"
                              />
                              <br/>
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Enter User Contact_NO.
                              </label>
                              <input
                                type="text"
                                name = "phone_no"
                                onChange={(e) => {
                                    editHandler(e, "phone");
                                }}
                                value={inputText.phone_no}
                                className="form-control input-field"
                                id="basicpill-phoneno-input"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group text-left">
                            <a href="/">
                                <button
                                 onClick={submitHandler}
                                type="button"
                                className="btn btn-success btn-login waves-effect waves-light mr-3"
                              >
                                  SAVE
                                {/* <ClipLoader loading={loading} size={18} />
                                {!loading && "Save"} */}
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
                            <script>document.write(new Date().getFullYear())</script> © SHOTT.
                        </div>

                    </div>
                </div>
            </footer> */}
      <Footer />
    </div>
    )
}

export default Add_user

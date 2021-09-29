import {React, useState, useEffect} from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from './Footer';
import {API} from '../API';
import axios from 'axios';
function Dashboard() {
const [data, setdata] = useState([]);
//const {userId} = useParams();

useEffect(() => {
  const response = axios.get(`${API}users`).then((response)=>{
    console.log(response.data.data);
    setdata(response.data.data);
    // console.log(data);

  }).catch((error) => {
      console.log(error);
  })
//  console.log(response);
 // setdata(response.)
},[])

const handleDelete = async (id) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}users/${id}`);
    if (res) {
      window.location.reload();
    }
  };
    return (
        <div className="main-content">

			<div className="page-content">
				<div className="container-fluid">

					{/* <!-- start page title --> */}


					<div className="row">
						<div className="col-12">
							<div className="page-title-box d-flex align-items-center justify-content-between">
								<h4 className="mb-0">Troopes - Users_lists</h4>

								<div className="page-title-right">
									<ol className="breadcrumb m-0">
										<li className="breadcrumb-item"></li>
										{/* <li className="breadcrumb-item">Commerce - Categories</li> */}
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

									<div className="row ml-0 mr-0  mb-10">
										<div className="col-sm-12 col-md-6">&nbsp;</div>
										<div className="col-sm-12 col-md-6">
											<div className="dropdown d-block">
												<a href="/add/users">
													<button type="button" className="btn btn-primary add-btn waves-effect waves-light float-right">
														<i className="fa fa-plus" aria-hidden="true"></i> Add New
													</button>
												</a>
											</div>
										</div>
									</div>
									<div className="table-responsive table-shoot">
										<table className="table table-centered table-nowrap mb-0">
											<thead className="thead-light">
												<tr>
													<th>Users Name </th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{
												
                                                 data.map(item => (
															<tr key={item._id}>
																<td>
																	{item.name}
																</td>
																<td>
																	<Link to={`/user/edit/${item._id}`}>
																		<button type="button" className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2">
																			Edit</button>
																	</Link>

																	<button onClick= {() => handleDelete(item._id)} type="button" className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2" id="sa-params">
																		Delete</button>

																</td>
															</tr>
														))
														}
											</tbody>
										</table>
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
							<script>document.write(new Date().getFullYear())</script> © TellyTell
						</div>

					</div>
				</div>
			</footer> */}
			<Footer/>
		</div>
    )
}

export default Dashboard

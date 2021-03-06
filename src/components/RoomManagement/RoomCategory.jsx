import React from 'react';
import { Link } from 'react-router-dom'
export default class RoomCategory extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12">
                                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                                    <ol className="breadcrumb pt-0">
                                        <li className="breadcrumb-item">
                                            {/* <a href="javascript:void(0);"> Room Category</a> */}
                                            <Link to="/RoomCategory" className="active"><i class="simple-icon-check"></i> Room Category</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            {/* <a href="javascript:void(0);"> Floor</a> */}
                                            <Link to="/Floor"><i class="simple-icon-calculator"></i> Floor</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            {/* <a href="javascript:void(0);">  Room No.</a> */}
                                            <Link to="/RoomNo"><i class="simple-icon-bubbles"></i> Room No.</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            {/* <a href="javascript:void(0);"> View Tariff</a> */}
                                            <Link to="/ViewTariff"><i class="simple-icon-bubbles"></i> View Tariff</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            {/* <a href="javascript:void(0);">Edit Tariff</a> */}
                                            <Link to="/EditTariff"><i class="simple-icon-bubbles"></i> Edit Tariff</Link>
                                        </li>

                                    </ol>
                                </nav>
                                <div className="separator mb-5"></div>


                                {/* =============MODE CODE START============== */}

                                <div classNameName="model-section">



                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Room Category</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <form action="javascript:void(0);">
                                                        <div className="form-group">
                                                            <label for="text">Room Category *</label>
                                                            <input type="text" className="form-control" placeholder="Room Category" id="text" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="number">Number Of Rooms</label>
                                                            <input type="number" className="form-control" placeholder="Number Of Rooms" id="number" />
                                                        </div>

                                                    </form>
                                                </div>


                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Submit</button>
                                                    <button type="button" className="btn btn-secondary">Reset</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* =============MODE CODE END ============== */}

                                {/* =================DATA TABLE CODE START================ */}

                                <div className="datatable-code-start card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0">Room Category</h2>
                                        <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Room Category
                                              </button>
                                        </div>
                                        <div classNameName="clearfix"></div>
                                    </div>


                                    <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Category</th>
                                                <th>No. Of Rooms</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Standard</td>
                                                <td>562</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>Deluxe Heritage</td>
                                                <td>1200</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>Standard</td>
                                                <td>2600</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>4</td>
                                                <td>Deluxe</td>
                                                <td>500</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>5</td>
                                                <td>Heritage</td>
                                                <td>2400</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>6</td>
                                                <td>Deluxe</td>
                                                <td>900</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>7</td>
                                                <td>Standard</td>
                                                <td>9800</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>8</td>
                                                <td>Heritage</td>
                                                <td>9632</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>9</td>
                                                <td>Deluxe</td>
                                                <td>3220</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>10</td>
                                                <td> Heritage</td>
                                                <td>1000</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>11</td>
                                                <td>Deluxe Heritage</td>
                                                <td>1200</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>


                                    {/* ============EDIT Mode COde Start=========== */}
                                    <div classNameName="model-section">
                                        <div className="modal fade" id="edit">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">


                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Add Room Category</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>


                                                    <div className="modal-body">
                                                        <form action="javascript:void(0);">
                                                            <div className="form-group">
                                                                <label for="text">Room Category *</label>
                                                                <input type="text" className="form-control" value="Room Category" placeholder="Room Category" id="text" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="number">Number Of Rooms</label>
                                                                <input type="number" className="form-control" value="565" placeholder="Number Of Rooms" id="number" />
                                                            </div>

                                                        </form>
                                                    </div>


                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Submit</button>
                                                        <button type="button" className="btn btn-secondary">Reset</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    {/* ============EDIT Mode COde END=========== */}
                                    {/* ============Delete Mode COde Start=========== */}
                                    <div className="modal fade" id="Delete">
                                        <div className="modal-dialog modal-sm">
                                            <div className="modal-content">

                                                <div className="modal-body">

                                                    <p classNameName="mb-0"><b>Are You Sure Want to delete?</b></p>
                                                </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Ok</button>
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ============Delete Mode COde END=========== */}

                                </div>




                                {/* =================DATA TABLE CODE END================ */}



                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}
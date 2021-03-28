import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {


    /* 03.05. Menu */

    render() {
        return (


            <div className="Menu-sectioccccn">

                <div class="sidebar">
                    <div class="main-menu">
                        <div class="scroll">
                            <ul class="list-unstyled">
                                <li class="active">
                                    <Link to="/home"><i class="iconsmind-Shop-4"></i>Home</Link>
                                </li>
                                <li>
                                <Link to="/user"><i class="iconsmind-Digital-Drawing"></i>People</Link>
                                </li>
                                <li>
                                    <Link to="/RoomCategory"><i class="iconsmind-Air-Balloon"></i>Room Management</Link>
                                </li>
                                <li>
                                   <Link to="/newreservation"><i class="iconsmind-Pantone"></i>Reservation</Link>
                                </li>
                                <li>
                                <Link to="/stayview"><i class="iconsmind-Space-Needle"></i>Front Office</Link>
                                </li>
                                <li>
                                <Link to="/salary"><i class="iconsmind-Three-ArrowFork"></i>Accounts</Link>
                                </li>
                                <li>
                                <Link to="/salary"><i class="iconsmind-Three-ArrowFork"></i>Configuration</Link>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>

                   
                </div>
                {/* <!-- ======================ASSIDE MENU CODE START====================== --> */}



                {/* <!-- ======================ASSIDE MENU CODE END====================== --> */}







                {/* <div class="collapse width show" id="sidebar">
            <div class="list-group border-0 text-center text-md-left">

         
            <Link to="/" class="list-group-item d-inline-block collapsed"><i class="fa fa-film"></i> <span class="d-none d-md-inline">Home </span></Link>


                <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-dashboard"></i> <span class="d-none d-md-inline">People</span> </a>
                <div class="collapse" id="menu1" data-parent="#sidebar">

                           <Link to="/User"  class="list-group-item">User</Link>
                            <Link class="list-group-item" to="/StaffRecord">Staff Record</Link>
                            <Link class="list-group-item" to="/AccessReport">Access Report</Link>
                           </div>
            
                <a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Room Management</span></a>
                <div class="collapse" id="menu3" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu3" to="/RoomCategory">Room Category</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/Floor">Floor</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/RoomNo">Room No.</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/ViewTariff">View Tariff</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/EditTariff">Edit Tariff</Link>

                            </div>


                <a href="#menu4" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Reservation</span></a>
                <div class="collapse" id="menu4" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu4" to="/NewReservation">New Reservation</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/ViewReservation">View Reservation Details</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/CancelList">Cancel List</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/TravelAgentThirdParty">Travel Agent / Third Party Side</Link>
                </div>


                <a href="#menu5" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Front Office</span></a>
                <div class="collapse" id="menu5" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu5" to="/StayView">Stay View</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/CheckIn">Check In</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/CheckOut">Check Out</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/RoomShifting">Room Shifting</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EditBooking">Booking Modification</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EarlyCheckOut">Early Check Out</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EodSaleReport">EOD Sale Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/MealReport">Meal Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/OccupancyReport">Occupancy Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/DirectBookingReport">Direct Booking Report</Link>
                 
                </div>


                <a href="#menu6" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Configuration</span></a>
                <div class="collapse" id="menu6" data-parent="#sidebar">

                            <Link class="list-group-item" data-parent="#menu6" to="/Salary">Salary</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/Rental">Rental</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/CommissionList">Commission List</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/NewExpense">New Expense</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/NewPurchase">New Purchase</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/DaySummary">Day Summary</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/SaleReport">Sale Report</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/Statement">P & L Statement</Link>
                 
                </div>


                <a href="#menu7" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Menu</span></a>
                <div class="collapse" id="menu7" data-parent="#sidebar">
                    
                                <Link class="list-group-item" data-parent="#menu7" to="/GstInfo">GST Info</Link>
                                <Link class="list-group-item" data-parent="#menu7" to="/Gst">GST</Link>
                 
                </div>




           
            </div>
        </div> */}







                {/*

                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <br/>
                    <li>
                        People
                        <ul>
                            <li><Link to="/User">User</Link></li>
                            <li><Link to="/StaffRecord">Staff Record</Link></li>
                            <li><Link to="/AccessReport">Access Report</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Room Management
                        <ul>
                            <li><Link to="/RoomCategory">Room Category</Link></li>
                            <li><Link to="/Floor">Floor</Link></li>
                            <li><Link to="/RoomNo">Room No.</Link></li>
                            <li><Link to="/ViewTariff">View Tariff</Link></li>
                            <li><Link to="/EditTariff">Edit Tariff</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Reservation
                        <ul>
                            <li><Link to="/NewReservation">New Reservation</Link></li>
                            <li><Link to="/ViewReservation">View Reservation Details</Link></li>
                            <li><Link to="/CancelList">Cancel List</Link></li>
                            <li><Link to="/TravelAgentThirdParty">Travel Agent / Third Party Side</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Front Office
                        <ul>
                            <li><Link to="/StayView">Stay View</Link></li>
                            <li><Link to="/CheckIn">Check In</Link></li>
                            <li><Link to="/CheckOut">Check Out</Link></li>
                            <li><Link to="/RoomShifting">Room Shifting</Link></li>
                            <li><Link to="/EditBooking">Booking Modification</Link></li>
                            <li><Link to="/EarlyCheckOut">Early Check Out</Link></li>
                            <li><Link to="/EodSaleReport">EOD Sale Report</Link></li>
                            <li><Link to="/MealReport">Meal Report</Link></li>
                            <li><Link to="/OccupancyReport">Occupancy Report</Link></li>
                            <li><Link to="/DirectBookingReport">Direct Booking Report</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Configuration
                        <ul>
                            <li><Link to="/Salary">Salary</Link></li>
                            <li><Link to="/Rental">Rental</Link></li>
                            <li><Link to="/CommissionList">Commission List</Link></li>
                            <li><Link to="/NewExpense">New Expense</Link></li>
                            <li><Link to="/NewPurchase">New Purchase</Link></li>
                            <li><Link to="/DaySummary">Day Summary</Link></li>
                            <li><Link to="/SaleReport">Sale Report</Link></li>
                            <li><Link to="/Statement">P & L Statement</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Menu
                        <ul>
                            <li><Link to="/GstInfo">GST Info</Link></li>
                            <li><Link to="/Gst">GST</Link></li>
                        </ul>
                    </li>
                </ul> 
                      
            */}
            </div>
        )
    }
}
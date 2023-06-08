import React from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
    return (
        <>
            <div className='container-fluid' style={{ "backgroundImage": 'url("/images/download.jpg")' }}>
                <div className="container">
                    <br />

                    <div className="row">
                        <div className="col-md-6" style={{ "padding-top": "10%" }}>
                            <h1>Invest in loans and earn money</h1>
                            <div>
                                <p>Invest in SMEs and make passive income.</p>
                                <button class="btn btn-outline-success" type="submit">How it works</button>

                            </div>
                        </div>


                        <div className='col-md-6' style={{ "padding-top": "9%" }}>
                            <img src="/images/trim.jpg" className="rounded" style={{ "width": "100%", "padding-left": "10%" }} /><br />
                        </div>

                    </div>
                </div>

                <br />

                <div className="container-fluid" style={{ "text-align": "center", "padding-top": "15%" }}>
                    <br />
                    <div>
                        <h1>About Us</h1>
                        {/* <hr style={{"color":"red", "padding-left":"20%"}}/> */}
                    </div>

                    <div >
                        <p style={{ "font-size": "150%", "padding-left": "20%", "padding-right": "15%", "padding-top": "5%" }}>SME financing, banking, investment management experience, our team helps retail investors tap into the P2B lending market and make passive income. We carefully assess SMEs and ensure that only qualified businesses can borrow through our platform.</p>
                    </div>



                </div>
                <br />
                <div className="container">
                    <br />

                    <div className="row">
                        <div className="col-md-4" style={{ "padding-top": "15%" }}>
                            <img src="/images/girl.jpg" className="rounded-circle" style={{ "width": "90%" }} />

                        </div>



                        <div className='col-md-8' style={{ "padding-top": "10%", "padding-left": "5%" }}>

                            <h1>How to get started on our P2P lending platform</h1>
                            <div className='container' style={{ "padding-top": "10%" }}>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <tr>
                                            <td><img src="/images/users1.png" className="rounded" width="20%" height="25%" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ "padding-top": "60%" }}><img src="/images/borrow.png" className="rounded" width="20%" height="25%" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ "padding-top": "70%" }}><img src="/images/reward.png" className="rounded" width="20%" height="25%" /></td>
                                        </tr>
                                    </div>
                                    <div className='col-md-8'>
                                        <tr>
                                            <td><h4 style={{ "padding-top": "0%" }}>Register</h4>
                                                <p>To get started, you have to pass the verification process and get approved.</p></td></tr>
                                        <tr>
                                            <td style={{ "padding-top": "10%" }}><h4>Borrow</h4> <p>Once approved, you can choose the offering you want to invest in while companies can submit the request to raise capital.</p></td></tr>
                                        <tr>
                                            <td style={{ "padding-top": "10%" }}><h4>Reward</h4> <p>When the campaign hits its funding goal, you can expect returns as stated in the offering T&C.</p></td></tr>
                                        
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
                <br />


                <div className="container">
                    <br />

                    <div className="row">
                        <div className="col-md-8" style={{ "padding-top": "50%" }}>
                            <h1>Invest or raise capital</h1>
                            <div>
                                <p>You can register as a lender or send us your pitch to get a quote and borrow money.</p>
                                <button class="btn btn-outline-success" type="submit" style={{ "background-color": "green", "font-color": "black" }}>Register</button>

                            </div>
                        </div>


                        <div className='col-md-4' style={{ "padding-top": "45%" }}>
                            <td> <img src="/images/girl2.jpg" className="rounded-circle" style={{ "width": "90%", "padding-left": "10%" }} /><br /></td>
                            {/* <img src="/images/hands.jpg" className="rounded-circle" style={{ "width": "80%", "padding-left": "10%" }} /> */}
                        </div>

                    </div>
                </div>
                <br />

                <div className='container' style={{ "padding-top": "30%" }}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h1>Contact us</h1>
                        </div>
                        <div className='col-md-8' style={{ "padding-top": "20%" }}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <tr>
                                            <td style={{ "padding-bottom": "50%", "padding-right": "10%" }}>
                                                <h4>Accessibility</h4>
                                                <p>We work with retail and institutional lenders with a minimum amount of RO500.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4>Cross-border investing</h4>
                                                <p>We work with international and local lenders and borrowers.</p>
                                            </td>
                                        </tr>

                                    </div>
                                    <div className='col-md-6' style={{ "padding-bottom": "50%", "padding-left": "10%" }}>
                                        <tr>
                                            <td>
                                                <h4>Reliable projects</h4>
                                                <p>We carefully select every project because your success is our success.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ "padding-top": "70%" }}>
                                                <h4>Rewarding returns</h4>
                                                <p>You can expect potential returns of 6 -12% a year depending on the projects</p>
                                            </td>
                                        </tr>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' style={{"padding-bottom":"20%", "text-align":"center"}}>
                    <h1 style={{"padding-top":"10%"}}>Our&nbsp; Partners</h1>
                    <img src="/images/fits.jpg" className="rounded" width="10%" height="35%" style={{"padding-top":"10%"}}/>
                    <img src="/images/first.jpg" className="rounded" width="9%" height="15%" style={{"padding-top":"10%"}}/><br />
                </div>

                <div className='container'>

                    <div style={{ "text-align": "center", "padding-bottom": "10%" }}>
                        <h1>Investment Packages</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>

                                <form style={{ 'margin-right': '5%' }}>
                                    
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="text" placeholder="Full Name*" name="text" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="text" placeholder="E-mail Address*" name="email" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="destination" className="form-label">Message</label>
                                            <input type="destination" className="form-control" id="pwd" placeholder="Your Message*" name="text" />
                                        </div>
                                   </form>
                                   </div>
                                   
                            <div className='col-md-4'>
                                   <form style={{ 'margin-right': '5%' }}>
                                   
                               
                                        <div className="mb-3">
                                            
                                            <label for="Location" className="form-label">Mobile</label>
                                            <input type="text" className="form-control" id="text" placeholder="Mobile No.*" name="text" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="destination" className="form-label">Topic</label>
                                            <input type="destination" className="form-control" id="pwd" placeholder="Your Message*" name="text" />
                                        </div>
                                        <div className='mb-3' style={{"padding-top":"40%"}}>
                                        <label for="destination" className="form-label"></label>
                                        <button class="btn btn-outline-success" type="submit">Submit</button>
                                        </div>
                                    
                                </form>
                            

                            </div>
                            <div className='col-md-4'>
                                <tr>
                                <td><h4 style={{"padding-left":"65%", "padding-top":"20%" }}>Reach&nbsp;out&nbsp;to&nbsp;us</h4></td>
                                </tr>
                                <tr>
                                <td style={{"padding-top":"30%"}}><i class="fa fa-phone" aria-hidden="true"></i><p style={{"padding-left":"65%" }}>+968&nbsp;7731&nbsp;8197</p></td>
                                </tr>
                                <tr>
                                <td style={{"padding-top":"30%"}}><i class="fa fa-envelope-o" aria-hidden="true" ></i><p style={{"padding-left":"65%" }}>admin@fundt.om</p></td>
                                </tr>
                            </div>

                        </div>
                    </div>

                </div>
            </div>








        </>
    )
}
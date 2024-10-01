import React from "react";
import Slider1 from "../inc/Slider1";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import img from "../images/img3.jpg";

function Home() {

return (

        <div>
            <Slider1/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">My website </h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to={"/about"} className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* our visiion mission values*/ }
            <VMC/>
            {/* our visiion mission values*/ }

            <section className="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img} className="w-20 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img} className="w-20 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Services 2</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img} className="w-20 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Services 3</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
            </section>
        </div>


);

}

export default Home;
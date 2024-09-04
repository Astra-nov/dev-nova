import React from "react";


const Header = () => {


    return(
        <section >
            <div className='container d-block d-md-none logo-container'>
                <div className='row'>
                    <div className="col-6">
                        <div className="header-logo">
                            <img src={require('./logo.png')} alt="logo"></img>
                        </div>
                        <div className="header-title">
                            <h1>Where AI meets open Collaborations</h1>
                            <h2>Join a global community of innovators, sharing, building, and advancing AI technology together. Let's shape the future!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Header;
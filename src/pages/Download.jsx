import React from 'react'
import Header from '../components/LandingPage/Header'
import style from "../components/LandingPage/Landing.module.css";
import woodenHands from "../assets/wooden-hands.svg"
import phone from "../assets/phone.svg"

function Download() {
    return (
        <div>
            <Header />
            <div
                className={` text-center ${style.bgBody}`}
                style={{
                    height: "231px",
                    fontFamily: "Poppins",
                    borderRadius: "0px 0px 200px 200px",
                }}
            >
                <div
                    className="position-absolute top-0 start-50 translate-middle"
                    style={{
                        width: "467px",
                        fontSize: "38px",
                        marginTop: "170px",
                        marginLeft: "120px",
                    }}
                >
                    <h1 style={{
                        position: "absolute",
                        marginTop: "7px"
                    }}>
                        Clinic App
                    </h1>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{ margin: "135px" }}>
                <div>
                    <p style={{ fontSize: "24px", marginBottom: "60px", width: "500px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src={woodenHands} style={{ width: "300px" }} />
                </div>
            </div>
            <div style={{
                marginLeft: "135px",
                marginRight: "135px",
                fontFamily: "Poppins",
            }}>
                <h1
                    style={{
                        color: "#CECECE",
                        position: "absolute",
                        marginLeft: "3px",
                    }}
                >
                    FEATURE APP
                </h1>
                <h1 style={{ position: "absolute", marginTop: "7px" }}>
                    <span style={{ color: "#0071BC" }}>FEATURE</span> APP
                </h1>
                <img src={phone} style={{ marginTop: "150px" }} />
            </div>
            
        </div>
        
    )
}

export default Download

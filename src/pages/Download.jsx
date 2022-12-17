import React from 'react'
import Header from '../components/LandingPage/Header'
import style from "../components/LandingPage/Landing.module.css";
import woodenHands from "../assets/wooden-hands.svg"
import phone from "../assets/phone.svg"
import Playstore from "../assets/LandingPage/Playstore.svg";

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
                        marginTop: "7px",}}
                        className={style.gradient}>
                        Clinic App
                    </h1>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{ margin: "135px" }}>
                <div>
                    <p style={{ fontSize: "24px", marginBottom: "60px", width: "500px" }}>
                        Click the Google Play Store icon to download the Clinic Application from the Google Play
                    </p>
                    <a href="#">
                        <img src={Playstore} alt="img" style={{ marginLeft: "-10px" }} />
                    </a>
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
                <h1 style={{ position: "absolute", marginTop: "7px" }}>
                    <span style={{ color: "#0071BC" }}>FEATURE</span> APP
                </h1>
                <div className="d-flex justify-content-around" >
                    <img src={phone} style={{ marginTop: "150px" }}/>
                </div>
            </div>
            <div style={{
                marginLeft: "135px",
                marginRight: "135px",
                marginTop: "100px",
                fontFamily: "Poppins"}}
                className='d-flex justify-content-between'>
                <div style={{marginTop: "100px"}}>
                    <h1 >What you can get from this app?</h1>
                </div>
                <div className='d-flex flex-row flex-wrap'>
                    <div className='text-center m-3'
                        style={{background: "#AAD0E9",
                        borderRadius: "0px 0px 20px 20px",
                        padding: "30px",
                        width: "330px"}}>
                        <h4 style={{fontWeight: "bold"}}>--Patient Request--</h4>
                        <p>You can see who the list of patients is referred to you</p>
                    </div>
                    <div className='text-center m-3'
                        style={{background: "#AAD0E9",
                        borderRadius: "0px 0px 20px 20px",
                        padding: "30px",
                        width: "330px"}}>
                        <h4 style={{fontWeight: "bold"}}>--Doctors Available--</h4>
                        <p>You can see who the doctors are available today</p>
                    </div>
                    <div className='text-center m-3'
                        style={{background: "#AAD0E9",
                        borderRadius: "0px 0px 20px 20px",
                        padding: "30px",
                        width: "330px"}}>
                        <h4 style={{fontWeight: "bold"}}>--Notifications--</h4>
                        <p>You can see info in notifications</p>
                    </div>
                    <div className='text-center m-3'
                        style={{background: "#AAD0E9",
                        borderRadius: "0px 0px 20px 20px",
                        padding: "30px",
                        width: "330px"}}>
                        <h4 style={{fontWeight: "bold"}}>--Scedule--</h4>
                        <p>You can see what your schedule is today</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Download

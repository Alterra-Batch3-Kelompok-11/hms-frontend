import react from "react";
import Phone from "../../assets/LandingPage/Phone.svg";
import Playstore from "../../assets/LandingPage/Playstore.svg";
import ViewDetailsDownload from "../../assets/LandingPage/ViewDetailsDownload.svg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function Download() {
  return (
    <div className={style.bgDownload}>
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-transparent border-0 " style={{marginLeft:"11vw", fontFamily:"Poppins"}}>
            <div className="card-body">
              <h5 className="card-title fs-1" style={{marginTop:"161px"}}>Download <span className={style.gradientText}>Cleanic App</span></h5>
              <p className="card-text fs-5 mt-4">
                Click the Apple Store icon to download the FarmaGym Application
                from the App Store if you are an Apple user or on the Google
                Play Store if you are an Android user.
              </p>
              <a href="#">
                <img  src={Playstore} alt="img" style={{marginLeft:"-10px"}} />
              </a>
              <Link to="/download">
                <img  src={ViewDetailsDownload} alt="img" style={{marginLeft:"40px"}} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent border-0">
            <div className="card-body">
                <img className="img-fluid" style={{marginTop:"190px", marginBottom:"150px"}} src={Phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
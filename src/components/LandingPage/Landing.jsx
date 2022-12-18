import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className={style.bgBody}
      style={{ height: "783px", fontFamily: "Poppins" }}
    >
      <div className="container text-end">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">
            <h1
              className="fw-bold"
              style={{
                paddingTop: "10vw",
                fontSize: "52px",
                marginLeft: "5vw",
              }}
            >
              Get the best Service from Us at{" "}
              <span style={{ color: "#0071BC" }}>Clinic</span>
            </h1>
            <p className="lead" style={{ fontSize: "28px" }}>
              We provide the best, practical, and efficient healthcare services
              for our patients
            </p>
            <Link to="/aboutUs">
              <button
                type="button"
                className="btn py-2 px-4"
                style={{ backgroundColor: "#0071BC", color: "white" }}
              >
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

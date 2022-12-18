import "../styles/Sidebar.css";
import Col from "react-bootstrap/Col";
import ClinicIcon from "../assets/Clinic-logo.svg";
import DashboardIcon from "../assets/Dashboard.svg";
import PatientIcon from "../assets/Patient.svg";
import DoctorsIcon from "../assets/Doctors.svg";
import MessageIcon from "../assets/Message.svg";
import AccountIcon from "../assets/Account.svg";
import SettingsIcon from "../assets/Settings.svg";
import Dropdown from "../assets/Dropdown.svg";
import { Auth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()

  return (
    <Col
      xs={2}
      className="shadow sidebar sticky-top"
      style={{ color: "#00395E", height: "98vh", paddingRight: "0px" }}
    >
      <div
        className="container d-flex border-bottom border-2"
        style={{ marginTop: "25px", paddingBottom: "15px" }}
      >
        <img
          src={ClinicIcon}
          style={{
            height: "48px",
            width: "52px",
            marginTop: "18px",
            marginLeft: "5px"
          }}
        />
        <h2
          className="d-none d-md-block"
          style={{ marginLeft: "20px", fontSize: "25px", marginTop: "29px" }}
        >
          Clinic
        </h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <a href="/Admin" className="text-decoration-none link mb-3">
          <div className="link">
            <button className="btn btn-toggle d-inline-flex border-0 collapsed">
              <img
                src={DashboardIcon}
                style={{ height: "22px", width: "22px" }}
              />
              <h5
                className="d-none d-md-block ms-3"
                style={{ color: "#00395E" }}
              >
                Dashboard
              </h5>
            </button>
          </div>
        </a>
        <span className="text-decoration-none link mb-3">
          <div>
            <div className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex border-0 collapsed poppins-font"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                <img
                  src={PatientIcon}
                  style={{ height: "24px", width: "24px" }}
                />
                <h5
                  className="d-none d-md-block ms-3"
                  style={{ color: "#00395E" }}
                >
                  Patient
                </h5>
                <img
                  src={Dropdown}
                  style={{ marginLeft: "90px", marginTop: "8px" }}
                />
              </button>
              <div className="collapse" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li className="link">
                    <a
                      href="/Admin/PatientList"
                      className="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      <p className="poppins-font" style={{ fontSize: "15px", marginTop:"20px", marginLeft:"70px" }}>
                        Data Pasien
                      </p>
                    </a>
                  </li>
                  <li className="link">
                    <a
                      href="#"
                      className="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      <p className="poppins-font" style={{ fontSize: "15px", marginLeft:"70px" }}>
                        Rawat Jalan
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </span>
        <a href="/Admin/DoctorList" className="text-decoration-none link mb-3">
          <div className="link">
            <button className="btn btn-toggle d-inline-flex border-0 collapsed">
              <img
                src={DoctorsIcon}
                style={{ height: "22px", width: "22px" }}
              />
              <h5
                className="d-none d-md-block ms-3"
                style={{ color: "#00395E" }}
              >
                Doctors
              </h5>
            </button>
          </div>
        </a>
        <a className="text-decoration-none link mb-3">
          <div className="link">
            <button className="btn btn-toggle d-inline-flex border-0 collapsed">
              <img
                src={MessageIcon}
                style={{ height: "22px", width: "22px" }}
              />
              <h5
                className="d-none d-md-block ms-3"
                style={{ color: "#00395E" }}
              >
                Message
              </h5>
            </button>
          </div>
        </a>
        <a className="text-decoration-none link mb-3">
          <div className="link">
            <button className="btn btn-toggle d-inline-flex border-0 collapsed">
              <img
                src={AccountIcon}
                style={{ height: "22px", width: "22px" }}
              />
              <h5
                className="d-none d-md-block ms-3"
                style={{ color: "#00395E" }}
              >
                Account
              </h5>
            </button>
          </div>
        </a>
        <a className="text-decoration-none link mb-3">
          <div className="link">
            <button onClick={() => Auth.signOut(navigate)} className="btn btn-toggle d-inline-flex border-0 collapsed">
              <img
                src={SettingsIcon}
                style={{ height: "22px", width: "22px" }}
              />
              <h5
                className="d-none d-md-block ms-3"
                style={{ color: "#00395E" }}
              >
                Log Out
              </h5>
            </button>
          </div>
        </a>
      </div>
    </Col>
  );
}

export default Sidebar;
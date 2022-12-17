import React from "react";
import "./style.css";
import ClinicIcon from "../../assets/icons/Clinic-logo.svg";
import DashboardIcon from "../../assets/icons/Dashboard.svg";
import PatientIcon from "../../assets/icons/Patient.svg";
import DoctorsIcon from "../../assets/icons/Doctors.svg";
import MessageIcon from "../../assets/icons/Message.svg";
import AccountIcon from "../../assets/icons/Account.svg";
import SettingsIcon from "../../assets/icons/Settings.svg";

const SideBar = (props) => {
  return (
    <>
      <div className="sidebar bg-white shadow">
        <div className="profil border-bottom border-2 border-dark">
          <img src={ClinicIcon} className="rounded" alt="img"></img>
          <h3 href="#about">Clinic</h3>
        </div>
        <div className="sidebar-menu">
          <a href="#home">
            <img src={DashboardIcon} />
            Dashboard
          </a>
          <a href="#home">
            <img src={PatientIcon} />
            Pasien
          </a>
          <a href="#home">
            <img src={DoctorsIcon} />
            Doctors
          </a>
          <a href="#home">
            <img src={MessageIcon} />
            Message
          </a>
          <a href="#home">
            <img src={AccountIcon} />
            Account 
          </a>
          <a href="#home">
            <img src={SettingsIcon} />
            Settings
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;

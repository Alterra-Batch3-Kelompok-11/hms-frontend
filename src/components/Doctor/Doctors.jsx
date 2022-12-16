import React from "react";
import NotifIcon from "../../assets/icons/Notification.svg";
import UserSettings from "../../assets/icons/UserSettings.svg";
import Search from "../../assets/icons/Search.svg";
import "../../assets/style.css";
import DoctorList from "./DoctorList";
import { useState } from "react";
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";
import "../Doctor/style.css";
import TambahDoctorPage from "./TambahDoctor";
import Button from 'react-bootstrap/Button';

const Doctors = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
        <div className="content container" style={{ width: "1150px" }}>
            <div className="container text-center">
            <div
                className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
                style={{ marginTop: "41px", marginBottom: "41px" }}
            >
            <div className="col">
              <h3
                className="poppins-font border-bottom"
                style={{ fontSize: "30px", color: "#00395E", width:"250px" }}
              >
                Data Dokter
              </h3>
            </div>
            <div className="col" style={{width:"400px", marginLeft:"240px"}}>
              <div className="input-group">
                <input
                  className="search-control shadow me-2 margin-side bg-light ps-4"
                 
                  type="search"
                  placeholder="Cari"
                  aria-label="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col" style={{width:"80px"}}>
            <a href="#"><img src={NotifIcon} alt="img" /></a>
            </div>
            <div className="col" style={{width:"80px"}}>
              <a href="#"><img src={UserSettings} alt="img" /></a>
            </div>
          </div>
          
          <Button variant="btn btn-primary" style={{float:"right", width:"150px"}} onClick={() => setModalShow(true)}>
            Tambah Dokter
          </Button>
          
          <TambahDoctorPage show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <div className="home">  
          {DoctorList.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.nama.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, doctor) => {
            val.quantity = 1;
          return (
          <div className="col1">  
          <div className="card" key={val}>
            <div className="row">
             <div className="col-sm-6"> 
              <img src={val.avatar} style={{width:"150px", height:"280px"}}/>                       
             </div>
             <div className="col-sm-6">  
              <h3>{val.name}</h3>
              <p>{val.nim}</p>
              <p>{val.Spesialis}</p>
              <div className="row">
                <div className="col-sm-3">
                  <img src={Group1} alt="img" />
                </div>
                <div className="col-sm-8">
                  <p>Senin - Kamis
                  <br />09.00 - 13.00 WIB</p>
                </div>    
                </div>
                  <p><button type="button" className="btn btn-primary">Lihat Detail</button></p> 
             </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>  
        </div>
    </>
  );
};

export default Doctors;

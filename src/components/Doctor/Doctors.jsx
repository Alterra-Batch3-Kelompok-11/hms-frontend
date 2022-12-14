import React from "react";
import NotifIcon from "../../assets/icons/Notification.svg";
import UserSettings from "../../assets/icons/UserSettings.svg";
import Search from "../../assets/icons/Search.svg";
import "../../assets/style.css";
import DoctorList from "./DoctorList";
import { useState } from "react";
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";
import styles from "../Doctor/style.module.css";

const Doctors = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
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
                style={{ fontSize: "30px", fontWeight:"600", borderBottom:  "1px solid #00395E" , lineHeight:"45px" , color: "#00395E", width:"250px" }}
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
          <button type="button" href="#" class="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "flex", 
          alignItems: "center", padding: "10px", gap: "10px", align:"right", float:"right"}}>Tambah Dokter</button>
          </div>
          <div className={styles.home}>  
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
          <div className={styles.col1}>  
          <div className={styles.card} key={val}>
            <div className="row">
             <div className="col-sm-4" style={{marginRight:"49px"}}> 
              <img src={val.avatar} style={{width:"162px", height:"310px"}}/>                       
             </div>
             <div className="col-sm-6">  
              <h3 style={{fontFamily:"Poppins", fontWeight:"600", fontSize:"25px", lineHeight:"48px"}}>{val.name}</h3>
              <p style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}}>{val.nim}</p>
              <p style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}} >{val.Spesialis}</p>
              <div className="row">
                <div className="col-sm-3">
                  <img src={Group1} alt="img" style={{width:"30px", height:"30px"}} />
                </div>
                <div className="col-sm-8" style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}}>
                  <p>Senin - Kamis
                  <br />09.00 - 13.00 WIB</p>
                </div>    
                </div>
                  <p><button type="button" className="btn btn-primary" style={{width: "141px", height: "47px", display: "flex",
                  background: "#0071BC", flexDirection: "row", justifyContent:"center", alignItems:"center", padding:"10px", gap:"10px"}}>Lihat Detail</button></p> 
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

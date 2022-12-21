import React from "react";
import Search from "../../assets/icons/Search.svg";
//import DoctorList from "./DoctorList";
import { useState, useEffect } from "react";
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";
import TambahDoctorPage from "./TambahDoctor";
import styles from "../Doctor/style.module.css";
import Row from "react-bootstrap/Row";
import UserSettingsAndNotification from "../UserSettingsAndNotification";
import Button from 'react-bootstrap/Button';
import instance from "../../API/AxiosInstance";
// import ModalButton from "./ModalButtonTambah";


const Doctors = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    instance.get('v1/doctors')
      .then(res => setDoctorList(res.data.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <Row style={{ minHeight: "100vh", paddingBottom:"30px" }}>
        <div className="content container-fluid" style={{ width: "1150px" }}>
        <Row>
          <div className="container text-center">
            <div
              className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
              style={{ marginTop: "41px", marginBottom: "41px" }}
            >
              <div className="col">
                <h3
                  className="poppins-font border-bottom border-3"
                  style={{ fontSize: "30px", color: "#00395E", width: "200px" }}
                >
                  Data Pasien
                </h3>
              </div>
              <div
                className="ms-auto d-none d-md-flex"
                style={{ width: "550px" }}
              >
                <div>
                  <img
                    src={Search}
                    className="position-absolute ms-3"
                    style={{ marginTop: "13px" }}
                  />
                  <input
                    type="search"
                    placeholder="Cari"
                    className="border border-0 ps-5 shadow bg-light text-dark pe-4"
                    style={{
                      height: "40px",
                      borderRadius: "20px",
                      width: "391px",
                    }}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                </div>
                <UserSettingsAndNotification />
              </div>
            </div>
          </div>
          </Row>
          <Row className="mb-5">
            <div className="col"></div>
            <div className="col"></div>

            <div className="ms-auto" style={{width: "160px"}}>
              <Button variant="btn btn-primary" style={{float:"right", width:"150px"}} onClick={() => setModalShow(true)}>
                Tambah Dokter
              </Button>
              
              <TambahDoctorPage show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Row>
          <div className={styles.home}>  
          {doctorList?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.nama.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
          return (
          <div className={styles.col1} key={val?.id}>  
          <div className={styles.card}>
            <div className="row">
             <div className="col-sm-4" style={{marginRight:"49px"}}> 
              <img src={val?.profile_pic} style={{width:"162px", height:"310px"}}/>                       
             </div>
             <div className="col-sm-6">  
              <h3 style={{fontFamily:"Poppins", fontWeight:"600", fontSize:"25px", lineHeight:"48px"}}>{val?.name}</h3>
              <p style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}}>{val?.license_number}</p>
              <p style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}} >{val?.speciality_name}</p>
              <div className="row mb-5">
                <div className="col-sm-3">
                  <img src={Group1} alt="img" style={{width:"30px", height:"30px"}} />
                </div>
                <div className="col-sm-8" style={{fontFamily:"Poppins", fontWeight:"400", fontSize:"20px", lineHeight:"30px"}}>
                  {val?.doctor_schedules?.map(dokter => {
                    return (
                      <span>{dokter.day_string}</span>
                    )
                  })}
                </div>    
              </div>
                  <a href={`/Admin/ManageDoctor/${val?.id}`}><button type="button" className="btn btn-primary" style={{width: "141px", height: "47px", display: "flex",
                  background: "#0071BC", flexDirection: "row", justifyContent:"center", alignItems:"center", padding:"10px", gap:"10px"}}>Lihat Detail</button></a> 
             </div>
            </div>
          </div>
          </div>
        );
      })}
          </div>  
        </div>
      </Row>
    </>
  );
};

export default Doctors;

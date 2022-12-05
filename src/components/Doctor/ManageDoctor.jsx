import React, { useState } from 'react'
import Ellipse2 from '../../assets/icons/ManageDoctor/Ellipse2.svg';
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";
import ManagePatientDoctor from './ManagePatientDoctor';

const ManageDoctor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  return (
    <>
    <div className='container-fluid'>
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
                PROFILE DOCTOR
              </h3>
            </div>
          </div>
          </div>
        <div className='row'>
            <div className='col-sm-6'>
                <div className='card' style={{width: "604px", height: "378px", boxShadow:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", borderRadius: "10px"}}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img src={Ellipse2} style={{padding:"30px", width: "227px", height: "228px"}} />
                        </div>
                        <div className='col-sm-8' style={{fontFamily:"Poppins", padding:"30px", color: "#00395E", paddingLeft:"78px"}}>
                            <h3 style={{fontWeight:"600", fontSize: "30px", lineHeight: "50px"}}>Dr. Bones</h3>
                            <p style={{fontWeight:"400", fontSize: "18px", lineHeight: "25px"}}>9824820130492</p>
                            <p style={{fontWeight:"600", fontSize: "16px", lineHeight: "20px"}}>Spesialist : Dokter Gigi</p>
                            <table style={{fontWeight:"400", fontSize: "16px", lineHeight: "30px"}}>
                              <tr>
                              <td rowSpan="2" style={{paddingRight:"20px"}}><b>Jadwal :</b></td>
                              <td>Senin-Kamis</td>
                              </tr>
                              <tr>
                                <td>09.00 WIB - 13.00 WIB</td>
                              </tr>
                            </table>
                            <button onClick={() => setOpenPopup(true)} type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", 
                            padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                            Lihat Details
                            </button>
                        </div>
                        </div>
                </div>
                <h3
                className="poppins-font border-bottom"
                style={{ fontSize: "30px", color: "#00395E", width:"250px" }}
              >
                HIS PATIENTS
              </h3>
                <div className="card">
              <table className="table table-nonbordered">
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Nama</td>
                    <td>Usia(Thn)</td>
                    <td>Keluhan</td>
                    <td>Jadwal Temu</td>
                  </tr>
                </thead>
                <tbody style={{background: "#CCE3F2", borderRadius:"50px",}}>
                  <tr>
                    <td>1</td>
                    <td>Jono</td>
                    <td>38</td>
                    <td>Batuk, pilek</td>
                    <td>17-11-2022</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jono</td>
                    <td>38</td>
                    <td>Batuk, pilek</td>
                    <td>17-11-2022</td>
                  </tr>
                </tbody>
              </table>
              <p style={{color:"#0071BC", float:"right"}}>Selengkapnya</p>
            </div>
            </div>
            <div className='col-sm-4' style={{marginLeft:"61px", marginRight:"61px"}}>
            <div className='card' style={{marginLeft:'61px', width:"342px", boxShadow:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", borderRadius: "10px", padding:"10px"}} >
            <h4
                className=""
                style={{color: "#00395E", width:"250px", padding:"20px" }}
              >
                Appointment
              </h4> <hr />
              <h4
                className="poppins-font border-bottom"
                style={{textAlign:"center", color: "white", background: "#00395E" }}
              >
                November 2022
              </h4>
              <div>
              <p style={{color: "#00395E"}}>Monday, November 21</p> <hr />
              <div className='row'>
                <div className='col-sm-3'>
                  <img src={Group1} />
                </div>
                <div className='col-sm-6'>
                  <p>09.00 - 13.00 WIB</p>
                </div>
              </div>
              </div>
              <div>
              <p style={{color: "#00395E"}}>Monday, November 21</p> <hr />
              <div className='row'>
                <div className='col-sm-3'>
                  <img src={Group1} />
                </div>
                <div className='col-sm-6'>
                  <p>09.00 - 13.00 WIB</p>
                </div>
              </div>
              </div>
              <div>
              <p style={{color: "#00395E"}}>Monday, November 21</p> <hr />
              <div className='row'>
                <div className='col-sm-3'>
                  <img src={Group1} />
                </div>
                <div className='col-sm-6'>
                  <p>09.00 - 13.00 WIB</p>
                </div>
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <ManagePatientDoctor />
    </>
  )
}

export default ManageDoctor
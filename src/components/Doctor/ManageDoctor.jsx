import React from 'react'
import Ellipse2 from '../../assets/icons/ManageDoctor/Ellipse2.svg';
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";

const ManageDoctor = () => {
  return (
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
                <div className='card'>
                    <div className='row'>
                        <div className='col'>
                            <img src={Ellipse2} />
                        </div>
                        <div className='col'>
                            <h3>Dr. Bones</h3>
                            <p>9824820130492</p>
                            <p>Spesialist : Dokter Gigi</p>
                            <tr>
                              <td>Jadwal:</td>
                              <td>Senin - Kamis</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>09.00 - 13.00 WIB</td>
                            </tr>
                            <button type="button" className="btn btn-light">Hapus Data</button>
                            <button type="button" className="btn btn-primary">Lihat Detail</button>
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
            <div className='col-sm-6'>
            <div className='card'>
            <h4
                className=""
                style={{color: "#00395E", width:"250px" }}
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
        <div className="row">
          <div className='col-sm-6'>
          
          </div>
        </div>
    </div>
    </div>
  )
}

export default ManageDoctor
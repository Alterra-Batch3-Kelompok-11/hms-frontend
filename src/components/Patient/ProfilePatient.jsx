import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";


const ProfilePatient = () => {
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
                  style={{ fontSize: "30px", color: "#00395E", width: "230px" }}
                >
                  Profile Pasien
                </h3>
              </div>
              <div
                className="ms-auto d-none d-md-flex"
                style={{ width: "550px" }}
              >         
              </div>
            </div>
          </div>
          </Row>
          <div className="card" style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)', borderRadius: '12px', fontFamily:"Poppins"}}>
            <div className="card-header" style={{border:'none', background:'white', paddingTop:'40px', paddingLeft:'40px', color: '#00395E'}}>
              <h5 className="poppins-font" style={{fontSize:'28px'}}>Data Pasien</h5>
            </div>
            <div className="card-body">
              <table className="table table-borderless" style={{color: '#00395E'}}>
                <tr style={{paddingLeft:'40px'}}>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                      Nama
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                      Jono Susilo
                    </div>
                  </td>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Tempat/Tanggal Lahir
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    Jakarta, 28 Juni 1993
                    </div>
                  </td>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Jenis Kelamin
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    Laki-laki
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                      NIK
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    33927100498492
                    </div>
                  </td>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Agama
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    Islam
                    </div>
                  </td>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Status Perkawinan
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    Menikah
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Nomor
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    081234567890
                    </div>
                  </td>
                  <td>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#89898B', fontWeight: '500', fontSize: '20px', lineHeight: '30px'}}>
                    Alamat
                    </div>
                    <div style={{paddingLeft:'25px', paddingRight:'25px', color: '#00395E', fontWeight: '500', fontSize: '24px', lineHeight: '36px'}}>
                    Condet, Jakarta Timur
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div style={{padding:'25px 0px'}}>
          <div className="card" style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)', borderRadius: '12px', fontFamily:"Poppins", color: '#00395E', padding:'0px 20px'}}>
            <div className="card-header" style={{border:'none', background:'white', paddingTop:'40px', paddingLeft:'20px', color: '#00395E'}}>
              <h5 className="poppins-font" style={{fontSize:'28px'}}>Riwayat</h5>
            </div>
            <div className="card-body">
              <table className="table table-borderless" style={{color: '#00395E'}}>
                <tr style={{background:"#F5F8FC", borderRadius:'10px'}}>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    09:00 - 13:00
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    01/12/2022
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    09:00 - 13:00
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    20/11/2022
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    09:00 - 13:00
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    10/10/2022
                    </div>
                  </td>
                  <td>
                  <button type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", 
                            padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                            View
                            </button>
                  </td>
                </tr>
                <tr style={{background:"#F5F8FC", borderRadius:'10px'}}>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Dokter
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Dr. Bones
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Dokter
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Dr. Bones
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Dokter
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Dr. Bones
                    </div>
                  </td>
                  <td>
                  <button type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", 
                            padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                            View
                            </button>
                  </td>
                </tr>
                <tr style={{background:"#F5F8FC", borderRadius:'10px'}}>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Gejala
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Batuk, Pilek, Demam
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Gejala
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Batuk, Pilek, Demam
                    </div>
                  </td>
                  <td>
                    <div style={{color: '#89898B', fontWeight: '500', fontSize: '16px', lineHeight: '24px'}}>
                    Gejala
                    </div>
                    <div style={{color: '#00395E', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}>
                    Batuk, Pilek, Demam
                    </div>
                  </td>
                  <td>
                    <div>
                    <button type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", 
                            padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                            View
                            </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          </div>         
        </div>
      </Row>
    </>
  )
}

export default ProfilePatient
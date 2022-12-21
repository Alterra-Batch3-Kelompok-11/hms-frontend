import React, { useState, useEffect } from 'react'
import Ellipse2 from '../../assets/icons/ManageDoctor/Ellipse2.svg';
import Group1 from "../../assets/icons/ListDoctor/Group1.svg";
import ManagePatientDoctor from './ManagePatientDoctor';
import ModalButtonEdit from './ModalButtonEdit';
import HisPatient from './HisPatient';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../API/AxiosInstance';
import { deleteData } from '../../API/InstanceWithToken';
import swal from 'sweetalert';
import Cookies from 'js-cookie';

const ManageDoctor = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataDokter, setDataDokter] = useState([])
  const props = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    instance.get(`v1/doctors/${props.id}`)
      .then(res => setDataDokter(res.data.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = async (e) => {
    e.preventDefault()

    instance.defaults.headers.post['Authorization'] = 'Bearer ' + Cookies.get('token');

    await swal({
      title: "Are you sure?",
      text: "Apakah anda yakin menghapus data dokter berikut",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        deleteData(`v1/doctors/${props.id}`)
    
        swal("Data Dokter Terhapus", {
          icon: "success",
        });

        navigate('/Admin/DoctorList')
      } else {
        swal("Data Pasien Masih tersimpan");
      }
    });

  }
  
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="content container" style={{ width: "1150px" }}>
            <div className="container text-center">
            <div
                className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
                style={{ marginTop: "41px", marginBottom: "10px" }}
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
          <div>
            <table className="table table-nonbordered">
              <tr>
                <td>
                <div className='card' style={{width: "604px", height: "378px" , boxShadow:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", borderRadius: "10px"}}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img src={dataDokter?.profile_pic} style={{padding:"30px", width: "227px", height: "228px"}} />
                        </div>
                        <div className='col-sm-8' style={{fontFamily:"Poppins", padding:"30px", color: "#00395E", paddingLeft:"78px"}}>
                            <h3 style={{fontWeight:"600", fontSize: "30px", lineHeight: "50px"}}>Dr. {dataDokter?.name}</h3>
                            <p style={{fontWeight:"400", fontSize: "18px", lineHeight: "25px"}}>{dataDokter?.license_number}</p>
                            <p style={{fontWeight:"600", fontSize: "16px", lineHeight: "20px"}}>Spesialist : {dataDokter?.speciality_name}</p>
                            {dataDokter?.doctor_schedules?.map(val => {
                                return (
                                  <>
                                    <table style={{ fontWeight: "400", fontSize: "16px", lineHeight: "30px" }} key={val.id}>
                                      <tr>
                                        <td rowSpan="2" style={{ paddingRight: "20px" }}><b>Jadwal :</b></td>
                                        <td>{val.day_string}</td>
                                      </tr>
                                      <tr>
                                        <td>{val.start_time} WIB - {val.end_time} WIB</td>
                                      </tr>
                                    </table>
                                  </>
                                )
                            })}
                            <div className='d-flex'>
                              <button onClick={(e) => handleDelete(e)} type="button" className="btn btn-outline-primary" style={{display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                                Hapus Data
                              </button>

                              <button onClick={handleShowModal} type="button" className="btn btn-primary ms-3" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px", gap: "10px", borderRadius:"10px", marginTop:"49px"}}>
                                Lihat Details
                              </button>
                            </div>
                        </div>
                        </div>
                </div>
                </td>
                <td rowSpan="2">
                <div className='card' style={{ top:'-31px',  marginLeft:'61px', width:"342px", height:"730px", boxShadow:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", borderRadius: "10px"}} >
                  <h4
                      className="poppins-font"
                      style={{color: "#00395E", width:"250px", padding:"20px 40px ", fontWeight: "600", fontSize: "18px", lineHeight: "27px"}}
                    >
                      Appointment
                    </h4>
                    <div style={{background: "#00395E", height:"49px", verticalAlign:"center"}}>
                    <h4
                      className="poppins-font"
                      style={{textAlign:"center", color: "white", fontSize:"18px"}}
                    >
                      November 2022
                    </h4>
                </div>
              <div style={{padding:"10px 40px"}}>
              <p className="poppins-font border-bottom" style={{color: "#00395E"}}>Monday, November 21</p>
                <p><span style={{paddingRight:"10px"}}><img src={Group1} /></span>
                  09.00 - 13.00 WIB</p>
              </div>
              <div style={{padding:"10px 40px"}}>
              <p className="poppins-font border-bottom" style={{color: "#00395E"}}>Monday, November 21</p>
                <p><span style={{paddingRight:"10px"}}><img src={Group1} /></span>
                  09.00 - 13.00 WIB</p>
              </div>
              <div style={{padding:"10px 40px"}}>
              <p className="poppins-font border-bottom" style={{color: "#00395E"}}>Monday, November 21</p>
                <p><span style={{paddingRight:"10px"}}><img src={Group1} /></span>
                  09.00 - 13.00 WIB</p>
              </div>
            </div>
                  <button onClick={handleShowEditModal} className="ms-5" type="button" style={{ backgroundColor: '#0071BC', color: 'white', border: '0'}}>
                    Edit Data
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                <h3
                className="poppins-font border-bottom"
                style={{ fontSize: "30px", color: "#00395E", width:"250px", marginTop:"20px"}}
              >
                HIS PATIENTS
              </h3>
                <div className="card" style={{marginTop:"25px", width:"604px" , boxShadow:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", borderRadius: "10px"}}>
                  <table className="table table-nonbordered" style={{color: "#00395E"}}>
                    <thead style={{textAlign:"center" , fontFamily: "Poppins", fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "30px"}}>
                      <tr>
                        <th scope='col'>No.</th>
                        <th scope='col'>Nama</th>
                        <th scope='col'>Usia(Thn)</th>
                        <th scope='col'>Keluhan</th>
                        <th scope='col'>Jadwal Temu</th>
                      </tr>
                    </thead>
                    {HisPatient.filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.nama.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                    }).map((val, patient) => {
                    return (
                      
                      <tbody key={patient} style={{background: "#CCE3F2", borderRadius:"50px", textAlign:"center" , fontFamily: "Poppins", fontStyle: "normal", fontWeight: "500", fontSize: "14px", lineHeight: "30px"}}>
                        <tr style={{borderRadius:"20px"}}>
                          
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.usia}</td>
                            <td>{val.keluhan}</td>
                            <td>{val.tanggal}</td>
                        </tr>
                      </tbody>
                      
                    );
                    })}
                    </table>
              <p style={{color:"#0071BC", float:"right"}}>Selengkapnya</p>
              </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
    </div>
    </>
  )
}

export default ManageDoctor
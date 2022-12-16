import { useState, useEffect } from "react";
import style from "../styles/TablePasien.module.css";
import Row from "react-bootstrap/Row";
import Search from "../assets/Search.svg";

import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import instance from "../API/AxiosInstance";

function SessionOutpatientPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([])
    const d = new Date();
    let year = d.getFullYear();
  
    useEffect(() => {
      instance.get('outpatient_sessions')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
    }, [])
  
    return (
      <>
        <Row style={{ paddingBottom: "30px"}}>
          <div className="content container-fluid" style={{ width: "1150px" }}>
            <Row style={{ marginBottom: "35px" }}>
              <div className="container text-center">
                <div
                  className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
                  style={{ marginTop: "41px", marginBottom: "41px" }}
                >
                  <div className="col">
                    <h3
                      className="poppins-font border-bottom border-3"
                      style={{
                        fontSize: "30px",
                        color: "#00395E",
                        width: "200px",
                      }}
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
                        className="border border-0 ps-5 shadow bg-light text-dark"
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
            <Row>
              <div className="container border shadow">
                <div className="table-responsive">
                  <table
                    className="table table-borderless text-center poppins-font"
                    style={{ color: "#00395E" }}
                  >
                    <div>
                      <thead style={{ fontSize: "20px" }}>
                        <tr>
                          <th
                            scope="col"
                            style={{
                              width: "10px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                              paddingLeft: "28px",
                            }}
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "190px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                            }}
                          >
                            NIK
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "150px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                            }}
                          >
                            Nama
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "110px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                              paddingLeft: "20px",
                            }}
                          >
                            Tanggal
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "150px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                              paddingLeft: "25px",
                            }}
                          >
                            Dokter
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "180px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                            }}
                          >
                            Gejala
                          </th>
                          <th
                            scope="col"
                            style={{
                              minWidth: "150px",
                              paddingTop: "17px",
                              paddingBottom: "27px",
                            }}
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                    </div>
                    {data?.filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    }).map((val) => {
                      return (
                        <div
                          className="border"
                          key={val.id}
                          style={{
                            background: "#CCE3F2",
                            borderRadius: "12px",
                            marginBottom: "8px",
                          }}
                        >
                          <tbody style={{ fontSize: "15px" }}>
                            <tr>
                              <th
                                scope="row"
                                className={style.counterCell}
                                style={{
                                  width: "10px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                  paddingLeft: "31px",
                                }}
                              >
                                .
                              </th>
                              <td
                                style={{
                                  minWidth: "190px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                  paddingLeft: "31px",
                                }}
                              >
                                {val.patient.nik}
                              </td>
                              <td
                                style={{
                                  minWidth: "200px",
                                  maxWidth: "150px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                }}
                              >
                                {val.patient.name}
                              </td>
                              <td
                                style={{
                                  minWidth: "20px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                }}
                              >
                                {val.created_at.slice(0, 10)}
                              </td>
                              <td
                                style={{
                                  minWidth: "160px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                  paddingLeft: "40px",
                                }}
                              >
                                {val.doctor.name}
                              </td>
                              <td
                                style={{
                                  minWidth: "180px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                  paddingLeft: "40px",
                                }}
                              >
                                {val.complaint}
                              </td>
                              <td
                                style={{
                                  minWidth: "180px",
                                  paddingTop: "22px",
                                  paddingBottom: "22px",
                                }}
                              >
                                {val.is_approved === 0 
                                    ? <span style={{ color: 'red' }}>Menunggu</span> 
                                    : <span style={{ color: 'green' }}>Diterima</span>
                                }
                              </td>
                            </tr>
                          </tbody>
                        </div>
                      );
                    })}
                  </table>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </>
    );
}

export default SessionOutpatientPage
import { useState } from "react";
import style from "../styles/TablePasien.module.css";
import Row from "react-bootstrap/Row";
// test
import NotifIcon from "../assets/Notification.svg";
import UserSettings from "../assets/UserSettings.svg";
import Search from "../assets/Search.svg";

import PatientList from "../components/ListPasien//PatientList";
import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import DropDown from "../components/ListPasien/DropDown";
import ModalButton from "../components/ListPasien/ModalButton";

const Patient = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Row style={{ paddingBottom: "30px" }}>
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
            <div style={{ marginBottom: "25px" }}>
              <ModalButton />
            </div>
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
                          Usia
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
                          Jenis Kelamin
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "180px",
                            paddingTop: "17px",
                            paddingBottom: "27px",
                          }}
                        >
                          No.Hp
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "150px",
                            paddingTop: "17px",
                            paddingBottom: "27px",
                          }}
                        >
                          Tanggal Daftar
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingTop: "17px",
                            paddingBottom: "27px",
                            paddingLeft: "7px",
                          }}
                        ></th>
                      </tr>
                    </thead>
                  </div>
                  {PatientList.filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.nama.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  }).map((val, patient) => {
                    return (
                      <div
                        className="border"
                        key={patient}
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
                              {val.nik}
                            </td>
                            <td
                              style={{
                                minWidth: "200px",
                                maxWidth: "150px",
                                paddingTop: "22px",
                                paddingBottom: "22px",
                              }}
                            >
                              {val.nama}
                            </td>
                            <td
                              style={{
                                minWidth: "20px",
                                paddingTop: "22px",
                                paddingBottom: "22px",
                              }}
                            >
                              {val.usia} tahun
                            </td>
                            <td
                              style={{
                                minWidth: "160px",
                                paddingTop: "22px",
                                paddingBottom: "22px",
                                paddingLeft: "40px",
                              }}
                            >
                              {val.kelamin}
                            </td>
                            <td
                              style={{
                                minWidth: "180px",
                                paddingTop: "22px",
                                paddingBottom: "22px",
                                paddingLeft: "40px",
                              }}
                            >
                              {val.hp}
                            </td>
                            <td
                              style={{
                                minWidth: "180px",
                                paddingTop: "22px",
                                paddingBottom: "22px",
                              }}
                            >
                              {val.tanggaldaftar}
                            </td>
                            <td
                              style={{
                                paddingTop: "22px",
                                paddingBottom: "22px",
                              }}
                            >
                              <DropDown />
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
};

export default Patient;

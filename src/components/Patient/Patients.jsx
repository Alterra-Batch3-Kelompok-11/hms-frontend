import React from "react";
import NotifIcon from "../../assets/icons/Notification.svg";
import UserSettings from "../../assets/icons/UserSettings.svg";
import Search from "../../assets/icons/Search.svg";
import "../../assets/style.css";
import PatientList from "./PatientList";
import { useState } from "react";

const Patient = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="content container" style={{ width: "1150px" }}>
        <div class="container text-center">
          <div
            class="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
            style={{ marginTop: "41px", marginBottom: "41px" }}
          >
            <div class="col">
              <h3
                className="poppins-font border-bottom"
                style={{ fontSize: "30px", color: "#00395E", width:"200px" }}
              >
                Data Pasien
              </h3>
            </div>
            <div class="col" style={{width:"400px", marginLeft:"240px"}}>
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
            <div class="col" style={{width:"80px"}}>
            <a href="#"><img src={NotifIcon} alt="img" /></a>
            </div>
            <div class="col" style={{width:"80px"}}>
              <a href="#"><img src={UserSettings} alt="img" /></a>
            </div>
          </div>
        </div>
        <div
          className="container border shadow"
          style={{ height: "auto", width: "auto" }}
        >
          <div
            className="poppins-font"
            style={{
              marginBottom: "27px",
              marginTop: "17px",
              fontSize: "20px",
              color: "#00395E",
            }}
          >
            <div className="">
              <div className="row">
                <td className="col" style={{ paddingLeft: "35px" }}>
                  No
                </td>
                <td className="col" style={{ marginLeft: "-60px" }}>
                  NIK
                </td>
                <td className="col" style={{ marginLeft: "-60px" }}>
                  Nama
                </td>
                <td className="col" style={{ marginLeft: "-30px" }}>
                  Usia
                </td>
                <td className="col" style={{ marginLeft: "-45px" }}>
                  Jenis Kelamin
                </td>
                <td className="col" style={{ marginLeft: "20px" }}>
                  No.Hp
                </td>
                <td className="col" style={{ marginLeft: "-45px" }}>
                  Tanggal Daftar
                </td>
              </div>
            </div>
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
                className="card d-flex position-relative" 
                style={{ marginBottom: "8px", backgroundColor: "#CCE3F2" }}
              >
                <div className="">
                  <table className="table table-borderless" key={patient}>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          style={{ width: "100px", paddingLeft: "30px" }}
                        >
                          {val.id}
                        </th>
                        <div className="row">
                          <td className="col" style={{ width: "5px" }}>
                            {val.nik}
                          </td>
                          <td className="col" style={{ width: "50px" }}>
                            {val.nama}
                          </td>
                          <td className="col" style={{ width: "50px" }}>
                            {val.usia}
                          </td>
                          <td className="col" style={{ width: "50px" }}>
                            {val.kelamin}
                          </td>
                          <td className="col" style={{ width: "50px" }}>
                            {val.hp}
                          </td>
                          <td className="col" style={{ width: "50px" }}>
                            {val.tanggaldaftar}
                          </td>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Patient;

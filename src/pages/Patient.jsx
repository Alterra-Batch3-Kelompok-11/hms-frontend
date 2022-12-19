import { useState, useEffect } from "react";
import style from "../styles/TablePasien.module.css";
import "../styles/TablePasien.css";
import Row from "react-bootstrap/Row";
import ReactReadMoreReadLess from "react-read-more-read-less";

import NotifIcon from "../assets/Notification.svg";
import UserSettings from "../assets/UserSettings.svg";
import Search from "../assets/Search.svg";
import Right from "../assets/Right.svg";
import Left from "../assets/Left.svg";
import Filter from "../assets/Filter.svg";

import PatientList from "../components/ListPasien//PatientList";
import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import DropDown from "../components/ListPasien/DropDown";
import ModalButton from "../components/ListPasien/TambahPasien";
import instance from "../API/AxiosInstance";

const Patient = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(6);

  const [pageNumberLimit, setpageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const d = new Date();
  let year = d.getFullYear();
  const TotalPage = data.length / 6;

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  useEffect(() => {
    instance
      .get(
        "http://ec2-18-142-246-127.ap-southeast-1.compute.amazonaws.com/v1/patients"
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + data.length);
  };

  const renderData = (data) => {
    return (
      <div>
        {data
          ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <div
                className={`border ${style.PaddingTopBottom}`}
                key={index}
                style={{
                  background: "#EBF2F9",
                  borderRadius: "12px",
                  marginBottom: "8px",
                }}
              >
                <tbody style={{ fontSize: "15px" }}>
                  <tr>
                    <th
                      scope="row"
                      // className={style.counterCell}
                      style={{
                        minWidth: "80px",
                        maxWidth: "80px",
                      }}
                    >
                      {1 + (index + 6 * (currentPage - 1))}
                    </th>
                    <td
                      style={{
                        minWidth: "150px",
                        maxWidth: "150px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={13}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val.nik}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "200px",
                        maxWidth: "200px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={17}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val.name}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "70px",
                        maxWidth: "70px",
                      }}
                    >
                      {year - val.birth_date.slice(0, 4)} tahun
                    </td>
                    <td
                      style={{
                        minWidth: "160px",
                        maxWidth: "160px",
                        paddingLeft: "40px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={15}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val.gender === 1 ? "Laki - Laki" : "Perempuan"}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "180px",
                        maxWidth: "180px",
                        paddingLeft: "40px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={13}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val.phone}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "180px",
                        maxWidth: "180px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={13}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val.created_at.slice(0, 10)}
                      </ReactReadMoreReadLess>
                    </td>
                    <td>
                      <DropDown />
                    </td>
                  </tr>
                </tbody>
              </div>
            );
          })}
      </div>
    );
  };

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
                    className="poppins-font"
                    style={{
                      fontSize: "30px",
                      color: "#00395E",
                      width: "316px",
                    }}
                  >
                    Pasien > Data Pasien
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
                      onClick={handleLoadMore}
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
            <div className="d-flex justify-content-end mb-4">
              <div class="dropdown me-4">
                <img
                  src={Filter}
                  class=""
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></img>
                <ul class="dropdown-menu">
                  <li>
                    <h6 class="dropdown-header">Dropdown header</h6>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </div>
              <ModalButton />
            </div>
            <div className="container border shadow">
              <div className="table-responsive">
                <table
                  className="table table-borderless text-center poppins-font"
                  style={{ color: "#00395E" }}
                >
                  <div className={`${style.TitlePaddingTopBottom}`}>
                    <thead style={{ fontSize: "20px" }}>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            width: "10px",
                            paddingLeft: "28px",
                          }}
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "190px",
                          }}
                        >
                          NIK
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "150px",
                          }}
                        >
                          Nama
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "130px",
                            maxWidth: "130px",
                          }}
                        >
                          Usia
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "160px",
                            maxWidth: "160px",
                          }}
                        >
                          Jenis Kelamin
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "160px",
                            maxWidth: "160px",
                          }}
                        >
                          No.Hp
                        </th>
                        <th
                          scope="col"
                          style={{
                            minWidth: "160px",
                            maxWidth: "160px",
                          }}
                        >
                          Tanggal Daftar
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "7px",
                          }}
                        ></th>
                      </tr>
                    </thead>
                  </div>
                  {renderData(currentItems)}
                </table>
              </div>
            </div>
            <div
              className="border mt-4 container text-center border-1"
              style={{
                width: "1150px",
                float: "right",
                height: "75px",
                borderRadius: "6px",
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="row" style={{ marginTop: "24px" }}>
                <div className="col-md-4" style={{fontSize:"18px", color:"#00395E"}}>
                  <h4>
                    Data {indexOfFirstItem + 1} - {indexOfLastItem} dari{" "}
                    {Math.ceil(TotalPage)} Halaman
                  </h4>
                </div>
                <div className="col-md-4 ms-auto d-flex justify-content-center">
                  <ul className="pageNumbers" style={{color:"#00395E", marginRight:"-50px", marginTop:"-10px"}}>
                    {/* <li>
                      <button onClick={handleLoadMore} className="loadmore">
                        <h5>View All</h5>
                      </button>
                    </li> */}
                    <li>
                      <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === pages[0] ? true : false}
                        style={{ marginTop: "-100px" }}
                      >
                        <img src={Left} alt="img" />
                      </button>
                    </li>
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}

                    <li>
                      <button
                        onClick={handleNextbtn}
                        disabled={
                          currentPage === pages[pages.length - 1] ? true : false
                        }
                        style={{ marginTop: "-100px" }}
                      >
                        <img src={Right} alt="img" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Patient;

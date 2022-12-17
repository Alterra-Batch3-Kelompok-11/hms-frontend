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

import PatientList from "../components/ListPasien//PatientList";
import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import DropDown from "../components/ListPasien/DropDown";
import ModalButton from "../components/ListPasien/ModalButton";

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setData(json));
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
    setitemsPerPage(itemsPerPage + 999999);
  };

  const renderData = (data) => {
    return (
      <div>
        {data
          .filter((todo) => {
            if (searchTerm === "") {
              return todo;
            } else if (
              todo.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return todo;
            }
          })
          .map((todo, index) => {
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
                      {todo.id}.
                    </th>
                    <td
                      style={{
                        minWidth: "150px",
                        maxWidth: "150px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={10}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {todo.email}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "200px",
                        maxWidth: "200px",
                      }}
                    >
                      <ReactReadMoreReadLess
                        charLimit={14}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {todo.name}
                      </ReactReadMoreReadLess>
                    </td>
                    <td
                      style={{
                        minWidth: "70px",
                        maxWidth: "70px",
                      }}
                    >
                      {todo.id} tahun
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
                        {todo.body}
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
                        {todo.body}
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
                        {todo.body}
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
              className="border mt-4 container text-center"
              style={{ width: "1150px", float: "right" }}
            >
              <div className="row" style={{ marginTop: "24px" }}>
                <div className="col-md-4">
                  <h4>Data 1 - 6 dari 20 Halaman</h4>
                </div>
                <div className="col-md-4 ms-auto">
                  <ul className="pageNumbers">
                    <li>
                      <button onClick={handleLoadMore} className="loadmore">
                        <h5>View All</h5>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === pages[0] ? true : false}
                        style={{ marginTop: "-100px" }}
                      >
                        <img src={Left} alt="" />
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
                        <img src={Right} alt="" />
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

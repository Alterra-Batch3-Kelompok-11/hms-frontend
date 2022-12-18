import react from "react";
import Col from "react-bootstrap/Col";
import style from "./Dashboard.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

function ListPasienDashboard() {
  return (
    <Col className="shadow px-3 py-4 ms-2 ms-md-0 table-responsive" md={7}>
      <table
        className="table table-borderless text-center"
        style={{ color: "#00395E" }}
      >
        <div>
          <thead>
            <tr style={{ fontSize: "20px", fontFamily: "Poppins" }}>
              <th
                className="px-3 pb-3"
                scope="col"
                style={{
                  minWidth: "60px",
                }}
              >
                No
              </th>
              <th className={` pb-3 ${style.NamaUsiaWidth}`}>Nama</th>
              <th className={` pb-3 ${style.NamaUsiaWidth}`}>Usia</th>
              <th className={` px-5 pb-3 ${style.KeluhanWidth}`} scope="col">
                Keluhan
              </th>
              <th
                className="px-1 pb-3 "
                scope="col"
                style={{ minWidth: "138px" }}
              >
                Jadwal Temu
              </th>
            </tr>
          </thead>
        </div>
        <div>
          <tbody style={{ fontSize: "18px" }}>
            <div className={`border border-1 border-dark ${style.border}`}>
              <tr>
                <th scope="row" className={`${style.NoWidth}`}>
                  1
                </th>
                <td className={`${style.NamaUsiaWidth}`}>
                  Jono bin Muhammad Salim
                </td>
                <td className={`${style.NamaUsiaWidth}`}>22</td>
                <td className={`${style.KeluhanWidth}`}>
                  <ReactReadMoreReadLess
                    charLimit={10}
                    readMoreText={"▼"}
                    readLessText={"▲"}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </ReactReadMoreReadLess>
                </td>
                <td className={`${style.JadwalWidth}`}>24-11-2021</td>
              </tr>
            </div>
            <div className={`border border-1 border-dark ${style.border}`}>
              <tr>
                <th scope="row" className={`${style.NoWidth}`}>
                  2
                </th>
                <td className={`${style.NamaUsiaWidth}`}>Joni fikri ali</td>
                <td className={`${style.NamaUsiaWidth}`}>18</td>
                <td className={`${style.KeluhanWidth}`}>
                  <ReactReadMoreReadLess
                    charLimit={10}
                    readMoreText={"▼"}
                    readLessText={"▲"}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </ReactReadMoreReadLess>
                </td>
                <td className={`${style.JadwalWidth}`}>24-11-2021</td>
              </tr>
            </div>
            <div className={`border border-1 border-dark ${style.border}`}>
              <tr>
                <th scope="row" className={`${style.NoWidth}`}>
                  3
                </th>
                <td className={`${style.NamaUsiaWidth}`}>Rina Putri Yulia</td>
                <td className={`${style.NamaUsiaWidth}`}>25</td>
                <td className={`${style.KeluhanWidth}`}>
                  <ReactReadMoreReadLess
                    charLimit={10}
                    readMoreText={"▼"}
                    readLessText={"▲"}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </ReactReadMoreReadLess>
                </td>
                <td className={`${style.JadwalWidth}`}>24-11-2021</td>
              </tr>
            </div>
          </tbody>
        </div>
      </table>
    </Col>
  );
}

export default ListPasienDashboard;
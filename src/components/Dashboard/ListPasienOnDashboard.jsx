import react from "react";
import Col from "react-bootstrap/Col";
import style from "./Dashboard.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

function ListPasienDashboard(props) {
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
            {props?.data?.patients?.map((val, index) => {
              return (
                <div className={`border border-1 border-dark ${style.border}`} key={index}>
                  <tr>
                    <th scope="row" className={`${style.NoWidth}`}>
                      {index + 1}
                    </th>
                    <td className={`${style.NamaUsiaWidth}`}>
                      {val?.patient?.name}
                    </td>
                    <td className={`${style.NamaUsiaWidth}`}>{val?.patient?.age}</td>
                    <td className={`${style.KeluhanWidth}`}>
                      <ReactReadMoreReadLess
                        charLimit={10}
                        readMoreText={"▼"}
                        readLessText={"▲"}
                      >
                        {val?.complaint}
                      </ReactReadMoreReadLess>
                    </td>
                    <td className={`${style.JadwalWidth}`}>{val?.schedule_date}</td>
                  </tr>
                </div>
              )
            })}
          </tbody>
        </div>
      </table>
    </Col>
  );
}

export default ListPasienDashboard;
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Search from "../assets/Search.svg";
import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import ListPasienDashboard from "../components/Dashboard/ListPasienOnDashboard";
import { useEffect, useState } from "react";
import instance from "../API/AxiosInstance";

function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    instance.get('v1/dashboard/web')
      .then(res => setData(res.data.data))
      .catch(err => console.log(err))
  }, [data])
  

  return (
    <div
      className="me-md-5 ms-md-4 ms-3 me-0"
      style={{ color: "rgba(0, 57, 94, 1)" }}
    >
      <Row className="my-5">
        <div className="d-block d-md-flex">
          <div style={{ width: "8vw" }}>
            <h3>Dashboard</h3>
            <div
              style={{ height: "2px", backgroundColor: "rgba(0, 57, 94, 1)" }}
            />
          </div>
          <div className="ms-auto d-none d-md-flex">
            <div>
              <img
                src={Search}
                className="position-absolute ms-3"
                style={{ marginTop: "13px" }}
              />
              <input
                type="search"
                placeholder="Cari"
                className="border border-0 ps-5 shadow pe-4"
                style={{ height: "40px", borderRadius: "20px" }}
              />
            </div>
            <UserSettingsAndNotification />
          </div>
        </div>
      </Row>
      <Row>
        <Col className="border px-3 pt-4 ms-2 ms-md-0">
          <h3 className="mb-4">Doctor jaga hari ini</h3>
          { data?.today_doctors?.map(val => {
            return (
              <div
                className="my-3 p-2"
                style={{ background: "#CCE3F2", borderRadius: "5px" }}
                key={val.day_int}
              >
                <h4>{val.name}</h4>
                <div className="d-flex">
                  <span>{val.speciality_name}</span>
                  <span className="ms-auto">{val.start_time} - {val.end_time}</span>
                </div>
              </div>
            )
          })}
        </Col>
        <Col className="border px-3 pt-4 ms-5 me-2">
          <h3 className="mb-4">Jadwal Temu Pasien</h3>
          { data?.today_outpatient_sessions?.map((val, index) => {
            return (
              <div
                className="my-3 p-2"
                style={{ background: "#CCE3F2", borderRadius: "5px" }}
                key={index}
              >
                <h4>{val?.patient?.name}</h4>
                <div className="d-flex">
                  <span>{val.speciality_name}</span>
                  <span className="ms-auto">{val?.schedule_time}</span>
                </div>
              </div>
            )
          })}
        </Col>
      </Row>
      <Row className="my-3">
        <ListPasienDashboard data={data} />
        <Col className="px-3 ms-3 me-2">
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light py-3"
          >
            <span>Total Doctors</span>
            <h5>{data?.total_doctors}</h5>
          </Row>
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light my-2 py-3"
          >
            <span>Total Nurses</span>
            <h5>{data?.total_nurses}</h5>
          </Row>
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light py-3"
          >
            <span>Total Patients</span>
            <h5>{data?.total_patients}</h5>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
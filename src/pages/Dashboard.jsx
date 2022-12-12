<<<<<<< HEAD
import react from "react"
import SideBar from "../components/SideBar/SideBar";
=======
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Search from "../assets/Search.svg";
import UserSettingsAndNotification from "../components/UserSettingsAndNotification";
import ListPasienDashboard from "../components/Dashboard/ListPasienOnDashboard";
>>>>>>> main

export default function Dashboard() {
  return (
<<<<<<< HEAD
    <>
      <SideBar />
    </>
  );
}
=======
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
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <h4>Dr. bones</h4>
            <div className="d-flex">
              <span>Spesialis Gigi</span>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <h4>Dr. bones</h4>
            <div className="d-flex">
              <span>Spesialis Gigi</span>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <h4>Dr. bones</h4>
            <div className="d-flex">
              <span>Spesialis Gigi</span>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <h4>Dr. bones</h4>
            <div className="d-flex">
              <span>Spesialis Gigi</span>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
        </Col>
        <Col className="border px-3 pt-4 ms-5 me-2">
          <h3 className="mb-4">Today Appointment</h3>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <span>Check Up</span>
            <div className="d-flex">
              <h4>Jono</h4>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <span>Check Up</span>
            <div className="d-flex">
              <h4>Jono</h4>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <span>Check Up</span>
            <div className="d-flex">
              <h4>Jono</h4>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
          <div
            className="my-3 p-2"
            style={{ background: "#CCE3F2", borderRadius: "5px" }}
          >
            <span>Check Up</span>
            <div className="d-flex">
              <h4>Jono</h4>
              <span className="ms-auto">07.00 - 11.00</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="my-3">
        <ListPasienDashboard />
        <Col className="px-3 ms-3 me-2">
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light py-3"
          >
            <span>Total Doctors</span>
            <h5>20</h5>
          </Row>
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light my-2 py-3"
          >
            <span>Total Nurses</span>
            <h5>15</h5>
          </Row>
          <Row
            style={{ width: "15vw", backgroundColor: "#55A0D2" }}
            className="text-light py-3"
          >
            <span>Total Patients</span>
            <h5>50</h5>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
>>>>>>> main

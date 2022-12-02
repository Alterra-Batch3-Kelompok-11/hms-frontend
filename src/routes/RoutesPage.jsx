import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';
import Login from '../pages/login/Login';
import Doctors from '../components/Doctor/Doctors';
import Patient from '../components/ListPasien/Patients';
import ManageDoctor from '../components/Doctor/ManageDoctor';

function RoutesPage() {
  return (
    <>
      {/* <Login /> */}
      <Row>
        <Sidebar />
        <Col xs={10} md={10}>
            {/* <Dashboard /> */}
            {/* <DoctorRegistration /> */}
            {/* <Patient /> */}
            {/* <PatientRegistration /> */}
            <ManageDoctor />
            {/* <Doctors /> */}
        </Col>
      </Row>
    </>
  )
}

export default RoutesPage
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';

function RoutesPage() {
  return (
    <Row>
        <Sidebar />
        <Col xs={6} md>
            {/* <Dashboard /> */}
            {/* <DoctorRegistration /> */}
            <PatientRegistration />
        </Col>
    </Row>
  )
}

export default RoutesPage
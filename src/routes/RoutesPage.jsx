import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';
import DoctorRegistration from '../pages/DoctorRegistration';

function RoutesPage() {
  return (
    <Row>
        <Sidebar />
        <Col xs={6} md>
            {/* <Dashboard /> */}
            <DoctorRegistration />
        </Col>
    </Row>
  )
}

export default RoutesPage
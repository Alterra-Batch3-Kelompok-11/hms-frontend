import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';
import DoctorRegistration from '../pages/DoctorRegistration';
import Login from '../pages/login/Login';

function RoutesPage() {
  return (
    <>
      {/* <Login /> */}
      <Row>
        <Sidebar />
        <Col xs={6} md>
            <Dashboard />
            {/* <DoctorRegistration /> */}
        </Col>
      </Row>
    </>
  )
}

export default RoutesPage
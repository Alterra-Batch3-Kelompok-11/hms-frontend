import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListPasien from '../pages/ListPasien'
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';
import DoctorRegistration from '../pages/DoctorRegistration';
import Login from '../pages/login/Login';

function RoutesPage() {
  return (
    <>
      <Login />
      {/* <Row>
        <Sidebar />
        <Col xs={10} md={10}>
            <Dashboard />
            <DoctorRegistration />
            <ListPasien />
        </Col>
      </Row> */}
    </>
  )
}

export default RoutesPage
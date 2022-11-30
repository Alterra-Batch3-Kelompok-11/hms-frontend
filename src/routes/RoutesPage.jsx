import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import ListPasien from '../pages/ListPasien'

function RoutesPage() {
  return (
    <Row>
        <Sidebar />
        <Col xs={6} md>
            {/* <Dashboard /> */}
            {/* <DoctorRegistration /> */}
            <ListPasien />
        </Col>
    </Row>
  )
}

export default RoutesPage
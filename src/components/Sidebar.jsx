import '../styles/Sidebar.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClinicIcon from '../assets/Clinic-logo.svg'
import DashboardIcon from '../assets/Dashboard.svg'
import PatientIcon from '../assets/Patient.svg'
import DoctorsIcon from '../assets/Doctors.svg'
import MessageIcon from '../assets/Message.svg'
import AccountIcon from '../assets/Account.svg'
import SettingsIcon from '../assets/Settings.svg'
import Dashboard from './Dashboard';

function Sidebar() {
  return (
    <Row>
      <Col xs={2} className='shadow sidebar' style={{ color: "#00395E"}}>
        <div className='d-flex ps-2 ps-md-5 my-3'>
          <img src={ClinicIcon} style={{ height: "30%" }}/>
          <h2 className='d-none d-md-block ms-3 mt-1'>Clinic</h2>
        </div>
        <div style={{ width: "15vw", height: "2px", backgroundColor: "black" }}/>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={DashboardIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Dashboard</h5>
          </div>
        </a>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={PatientIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Patient</h5>
          </div>
        </a>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={DoctorsIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Doctors</h5>
          </div>
        </a>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={MessageIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Message</h5>
          </div>
        </a>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={AccountIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Account</h5>
          </div>
        </a>
        <a className='text-decoration-none link mb-3'>
          <div className='d-flex ps-3 ps-md-5 my-3 link'>
              <img src={SettingsIcon} style={{ height: "30%" }} />
              <h5 className='d-none d-md-block ms-3' style={{ color: "#00395E"}}>Settings</h5>
          </div>
        </a>
      </Col>
      <Col xs={6} md>
        <Dashboard />
      </Col>
    </Row>
  )
}

export default Sidebar
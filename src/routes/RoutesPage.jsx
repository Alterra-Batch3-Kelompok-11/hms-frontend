import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';
import Login from '../pages/login/Login';
import Doctors from '../components/Doctor/Doctors';
//import Patient from '../pages/Patient';
import LandingPage from '../pages/LandingPage';
import ManageDoctor from '../pages/Patient';
import AboutUs from '../pages/AboutUs';
import Row from 'react-bootstrap/className=';
import Col from 'react-bootstrap/Col';

function RoutesPage() {
  return (
    <>
      {/* <Login />  */}
      <LandingPage />
      {/* <AboutUs /> */}
      <Row>
        <Sidebar />
        <Col xs={10} md={10}>
            <Dashboard /> 
            {/* <DoctorRegistration />  */}
            <Patient /> 
            {/* <PatientRegistration /> 
            <ManageDoctor /> 
            <Doctors /> */}
        </Col>
      </Row>
    </>
  )
}

export default RoutesPage
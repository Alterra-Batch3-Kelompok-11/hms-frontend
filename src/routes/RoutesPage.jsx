import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';
import Login from '../pages/login/Login';
import Doctors from '../components/Doctor/Doctors';
//import Patient from '../pages/Patient';
import LandingPage from '../pages/LandingPage';
//import ManageDoctor from '../pages/Patient';
import AboutUs from '../pages/AboutUs';
import Patient from '../components/ListPasien/Patients';
import ManageDoctor from '../components/Doctor/ManageDoctor';
import ProtectedRoutes from "./ProtectedRoutes";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        {/* <Login />  */}
        {/* <AboutUs /> */}
        {/* <LandingPage /> */}
        <Route path="/" element={<Login />} />

        <Route path="/Admin" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="/Admin/DoctorRegistration" element={<DoctorRegistration />} />
          <Route path="/Admin/PatientList" element={<Patient />} />
          <Route path="/Admin/PatientRegistration" element={<PatientRegistration />} />
          <Route path="/Admin/ManageDoctor" element={<ManageDoctor />} />
          <Route path="/Admin/DoctorList" element={<Doctors />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default RoutesPage
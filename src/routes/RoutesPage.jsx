import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';
import Login from '../pages/login/Login';
import Doctors from '../components/Doctor/Doctors';
import LandingPage from '../pages/LandingPage';
import ManageDoctor from '../pages/Patient';
import AboutUs from '../pages/AboutUs';
import ProtectedRoutes from './ProtectedRoutes';
import Patient from "../pages/Patient";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />

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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import DoctorRegistration from '../pages/DoctorRegistration';
import PatientRegistration from '../pages/PatientRegistration';
import Login from '../pages/login/Login';
import Doctors from '../components/Doctor/Doctors';
import ManageDoctor from '../components/Doctor/ManageDoctor';
import ProtectedRoutes from "./ProtectedRoutes";
//import OutpatientRegistration from "../pages/OutpatientRegistration";
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import Patient from "../pages/Patient";
import SessionOutpatientPage from "../pages/OutpatientSession";
import ProfilePatientPage from "../pages/ProflePatientPage";
import RiwayatPasien from "../components/Doctor/RiwayatPasien";

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
          {/* <Route path="/Admin/PatientEdit/:id" element={<PatientRegistration />} /> */}
          <Route path="/Admin/Outpatient" element={<SessionOutpatientPage />} />
          <Route path="/Admin/ManageDoctor" element={<ManageDoctor />} />
          <Route path="/Admin/DoctorList" element={<Doctors />} />
          <Route path="/Admin/ProfilePatient" element={<ProfilePatientPage />} />
          <Route path="/Admin/RiwayatPasien" element={<RiwayatPasien />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default RoutesPage
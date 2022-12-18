import react from "react";
import SideBar from "../components/SideBar/SideBar";
import Patients from "../components/Patient/Patients";

export default function Dashboard() {
  return (
    <>
        <SideBar />
        <Patients />
    </>
  );
}

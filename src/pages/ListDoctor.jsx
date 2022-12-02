import react from "react";
import SideBar from "../components/SideBar/SideBar";
import Doctors from "../components/Doctor/Doctors";

export default function Dashboard() {
  return (
    <>
        <SideBar />
        <Doctors />
    </>
  );
}

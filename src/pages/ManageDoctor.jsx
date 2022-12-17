import react from "react";
import SideBar from "../components/SideBar/SideBar";
import ManageDoctor from "../components/Doctor/ManageDoctor";

export default function Dashboard() {
  return (
    <>
        <SideBar />
        <ManageDoctor />
    </>
  );
}

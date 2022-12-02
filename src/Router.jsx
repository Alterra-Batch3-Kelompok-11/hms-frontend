import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListPasien from "./pages/ListPasien";
import ListDoctor from "./pages/ListDoctor";
import ManageDoctor from "./pages/ManageDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/listPasien" exact element={<ListPasien />} />
        <Route path="/listDoctor" exact element={<ListDoctor />} />
        <Route path="/manageDoctor" exact element={<ManageDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

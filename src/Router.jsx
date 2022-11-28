import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListPasien from "./pages/ListPasien";
import ListDoctor from "./pages/ListDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/listPasien" exact element={<ListPasien />} />
        <Route path="/listDoctor" exact element={<ListDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

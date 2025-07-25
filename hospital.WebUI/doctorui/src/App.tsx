import React from 'react';

import Menu from './Container/menu'
import Country from './Container/Country'
import Hospital from './Pages/Hospital';
import Topbar from './Container/Topbar';
import { Route, Routes } from 'react-router-dom';
import Adddoctor from './Pages/Doctor/Adddoctor';
import Doctors from './Pages/Doctor/Doctors';
import Doctorsdetail from './Pages/Doctor/Doctorsdetail';


function App() {
  return (
    <>
      <div className="nk-app-root has-sidebar">

        <Menu />

        <div className="nk-main ">
          <div className="nk-wrap ">
            <Topbar />
            <Routes>
              <Route path="/" element={<Hospital />} />
              <Route path="/index" element={<Hospital />} />
              <Route path="/home" element={<Hospital />} />
              <Route path="/adddoctor" element={<Adddoctor />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/nurses" element={<Doctors />} />
              <Route path="/addnurses" element={<Adddoctor />} />
              <Route path="/addemployee" element={<Adddoctor />} />
              <Route path="/employees" element={<Doctors />} />
              <Route path="/doctorsdetail/:Id" element={<Doctorsdetail />}  />
            </Routes>
          </div>
        </div>

      </div>
      <Country />
    </>
  );
}

export default App;

import React from 'react';

import Menu from './Container/menu'
import Country from './Container/Country'
import Hospital from './Pages/Hospital';
import Topbar from './Container/Topbar';
import { Route, Routes } from 'react-router-dom';
import Adddoctor from './Pages/Doctor/Adddoctor';
import Doctors from './Pages/Doctor/Doctors';
import Doctorsdetail from './Pages/Doctor/Doctorsdetail';
import Patients from './Pages/Patient/Patients';


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
              <Route path="/doctorsdetail/:Id" element={<Doctorsdetail />}  />

              <Route path="/nurses" element={<Doctors />} />
              <Route path="/addnurses" element={<Adddoctor />} />
              <Route path="/nursesdetail/:Id" element={<Doctorsdetail />}  />

              <Route path="/addemployee" element={<Adddoctor />} />
              <Route path="/employees" element={<Doctors />} />     
              <Route path="/employeesdetail/:Id" element={<Doctorsdetail />}  />        

              <Route path="/patients" element={<Patients />}  />
              <Route path="/addpatient" element={<Patients />}  />
              <Route path="/patientdetail/:Id" element={<Patients />}  />
            </Routes>
          </div>
        </div>

      </div>
      <Country />
    </>
  );
}

export default App;

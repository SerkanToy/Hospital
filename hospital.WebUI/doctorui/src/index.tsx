import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Account/Login';
import Hospital from './Pages/Hospital';
import Adddoctor from './Pages/Doctor/Adddoctor';
import Doctors from './Pages/Doctor/Doctors';
import { Provider } from 'react-redux';
import store from './Storage/store';
import Doctorsdetail from './Pages/Doctor/Doctorsdetail';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />}>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter></Provider>
  </React.StrictMode>
);

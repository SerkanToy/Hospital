import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Account/Login';
import Hospital from './Pages/Hospital';
import Adddoctor from './Pages/Doctor/Adddoctor';
import Doctors from './Pages/Doctor/Doctors';
import { Provider } from 'react-redux';
import store from './Storage/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Hospital />} />
            <Route path="/index" element={<Hospital />} />
            <Route path="/home" element={<Hospital />} />
            <Route path="/adddoctor" element={<Adddoctor />} />
            <Route path="/doctors" element={<Doctors />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter></Provider>
  </React.StrictMode>
);

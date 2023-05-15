import React, { useState } from "react";
import { Route, Navigate, NavLink, Routes } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContact] = useState([]);
  const [appointments, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newArrayObject = { name, phone: `Phone: ${phone}`, email: `Email: ${email}` };
    setContact((contacts) => [...contacts, newArrayObject]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newArrayObject = { title, contact, date, time };
    setAppointment((appointments) => [...appointments, newArrayObject]);
  };
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            path='/'
            element=<Navigate
              replace
              to={ROUTES.CONTACTS}
            />
          />
          {/* <Redirect to={ROUTES.CONTACTS} /> */}
          <Route
            path='/contacts'
            element=<ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          />
          {/* Add props to ContactsPage */}
          <Route
            path='/appointments'
            element=<AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          />
          {/* Add props to AppointmentsPage */}
        </Routes>
      </main>
    </>
  );
}

export default App;

import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select
      name='contact'
      onChange={(e) => {
        setContact(e.target.value);
      }}
    >
      <option value=''>--Please choose an option--</option>
      {contacts.map((contact, index) => (
        <option
          value={contact.name}
          key={index}
        >
          {contact.name}
        </option>
      ))}
    </select>
  );
};
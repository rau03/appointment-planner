import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({ addContact, contacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    !duplicate && addContact(name, phone, email);
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const check = contacts.find((contact) => contact.name === name);
    check ? setDuplicate("true") : setDuplicate(false);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList elements={contacts} />
      </section>
    </div>
  );
};
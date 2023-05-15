import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({ contacts, title, setTitle, setContact, date, setDate, time, setTime, handleSubmit }) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const today = getTodayString();

  return (
    <form
      id='appointmentForm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={title}
        placeholder={"Title"}
        onChange={(e) => {
          let title = e.target.value.toLowerCase();
          const words = title.split(" ");

          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              words[i] = words[i] = words[i][0].toUpperCase() + words[i].substr(1 | undefined);
            }
          }
          title = words.join(" ");
          setTitle(title);
        }}
        required
      />
      <ContactPicker
        contacts={contacts}
        setContact={setContact}
      />
      <input
        type='date'
        value={date}
        placeholder={"Date"}
        onChange={(e) => setDate(e.target.value)}
        min={today}
        required
      />
      <input
        type='time'
        value={time}
        placeholder={"Time"}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
};
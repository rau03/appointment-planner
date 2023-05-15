import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder={"Name"}
        onChange={(e) => {
          let name = e.target.value.toLowerCase();
          const words = name.split(" ");

          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              words[i] = words[i] = words[i][0].toUpperCase() + words[i].substr(1 | undefined);
            }
          }
          name = words.join(" ");
          setName(name);
        }}
        required
      />
      <input
        type='tel'
        value={phone}
        placeholder={"Phone"}
        onChange={(e) => setPhone(e.target.value)}
        minLength={9}
        maxLength={13}
        pattern='[0-9+]*'
        required
      />
      <input
        type='email'
        value={email}
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        required
      />
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
};
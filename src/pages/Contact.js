import React from "react";

function Contact() {
  return (
    <form>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="text" name="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;

import React from "react";
import "./contact.css";
import { ContactForm } from "../../components/export-components";

const Contact = () => {
  return (
    <div className="contact section container" id="contact">
      <h2 className="section__title">CONTACT ME</h2>
      <h3 className="contact__subtitle">
        Enjoy my work and intrested in <br />
        contacting me?
      </h3>
      <div className="contact__container grid">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g6jhh5a", "template_yqd3aqq", form.current, {
        publicKey: "Ky_0oRg1KuppatCHd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action=""
      className="contact__form"
      id="contact_form"
    >
      <input type="hidden" name="contact_number"></input>
      <input
        type="text"
        placeholder="Name"
        className="contact__name"
        name="user_name"
      />
      <input
        type="email"
        name="user_email"
        id=""
        placeholder="Email Address"
        className="contact__email"
      />
      <textarea
        type="text"
        placeholder="Your message"
        className="contact__text"
        name="message"
      ></textarea>
      <input
        type="submit"
        className="button contact__button"
        value="Submit"
      ></input>
    </form>
  );
};

export default ContactForm;

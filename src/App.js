import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export const App = () => {
  emailjs.init("TLO9ha-HghlHjORgh");

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    alert("email sent successfully!!");
    console.log("form Data", {
      to_name: form?.current?.user_name?.value,
      from_name: "Amit Boruah",
      message:
        "hello " +
        form?.current?.user_name?.value +
        " " +
        form?.current?.message?.value +
        "\n",
      reply_to: form?.current?.user_email?.value,
    });

    emailjs
      .send("service_1bofq7f", "template_2p2tvur", {
        to_name: form?.current?.user_name?.value,
        from_name: "Amit boruah",
        message: form?.current?.message?.value,
        reply_to: form?.current?.user_email?.value,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

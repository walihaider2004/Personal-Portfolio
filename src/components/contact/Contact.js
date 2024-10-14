import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle sending email
  const handleSend = (e) => {
    e.preventDefault();

    // Basic validation
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please provide your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send the email via EmailJS
      emailjs
        .send(
          "your_service_id", // Replace with your EmailJS service ID
          "your_template_id", // Replace with your EmailJS template ID
          {
            from_name: username,
            from_email: email,
            phone_number: phoneNumber,
            subject: subject,
            message: message,
          },
          "walihaiderjalali1407@gmail.com" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            setSuccessMsg(
              `Thank you, ${username}, your message has been sent successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            setErrMsg("Failed to send message, please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 text-orange-500 text-center text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 text-green-500 text-center text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white uppercase tracking-wide">Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" && "outline-designColor"
                    } contactInput`}
                    type="text"
                    name="from_name"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" && "outline-designColor"
                    } contactInput`}
                    type="text"
                    name="from_phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please provide your Email!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                  name="from_email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please provide your Subject!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  name="message"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-white tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

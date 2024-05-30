
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../assets/contact-png.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2dwlisd", "template_5b1y5sw", form.current, {
        publicKey: "L24R6BkulOM_zRNUv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-100vh] lg:px-[8rem] mt-[30px]"
      id="contact"
    >
      <h1 className="text-[40px] text-accent font-bold leading-[0.8] pt-[2rem] lg:text-[50px] text-center lg:p-8 ">
        contact
      </h1>
      <div className=" w-full h-full mt-3 flex flex-col  lg:gap-[50px]  lg:flex-row">
        <div className="form flex-1 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[20px] justify-center  h-[450px] border-none lg:w-[500px] p-4"
          >
            <input
              className="p-[16px] rounded-lg text-accent font-heading "
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              className="p-[16px] rounded-lg  text-accent font-heading"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              className="p-[20px] rounded-lg  text-accent font-heading"
              name="message"
              id=""
              placeholder="Send me a message"
              rows={3}
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="btn  rounded-lg text-white font-heading font-bold h-[45px] "
            >
              send
            </button>
          </form>
        </div>
        <div className="map flex-1">
        <img className="w-[500px] p-2" src={phone} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

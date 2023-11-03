/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_kio5ys8", "template_5rra88x", formRef.current, "4e0mfZLuTCJ0ruiST").then(
      (result) => {
        setSuccess(true);
      },
      (error) => {
        setError(true);
      }
    );
  };

  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>holitsky98@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Bogor, Indonesia </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+62 8957 0198 4500</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="client_name" />
          <input type="email" required placeholder="Email" name="client_email" />
          <textarea rows={8} required placeholder="Message" name="message" />
          <button>Submit</button>
          {error && alert("Message failed to send, Try Again!")}
          {success && alert("The message was sent successfully, thank you for contacting me")}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

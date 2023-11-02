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
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M302.552 236H294.045C294.045 218.147 279.667 203.618 262 203.618V195.021C284.363 195.021 302.552 213.401 302.552 236ZM357 236H348.493C348.493 187.805 309.693 148.597 262 148.597V140C314.383 140 357 183.065 357 236Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M411 236H402.518C402.518 157.48 339.48 93.5958 262 93.5958V85C301.797 85 339.214 100.707 367.357 129.228C395.501 157.749 411 195.668 411 236Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M252.803 449H69.1916C51.9948 449 38 435.039 38 417.871V34.1289C38 16.9667 51.9891 3 69.1916 3H252.808C270.005 3 284 16.961 284 34.1289V52.8404H275.439V34.1289C275.439 21.6773 265.291 11.5441 252.808 11.5441H69.1916C56.715 11.5441 46.5613 21.6716 46.5613 34.1289V417.877C46.5613 430.328 56.7093 440.462 69.1916 440.462H252.808C265.285 440.462 275.439 430.334 275.439 417.877V399.16H284V417.871C283.994 435.039 270.005 449 252.803 449Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M197.771 30H124.229C116.931 30 111 24.0313 111 16.7011V7.30851C111 4.93021 112.92 3 115.286 3H206.714C209.08 3 211 4.93021 211 7.30851V16.7011C211 24.0313 205.063 30 197.771 30ZM119.571 11.617V16.7011C119.571 19.2862 121.663 21.383 124.229 21.383H197.766C200.337 21.383 202.423 19.2804 202.423 16.7011V11.617H119.571Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M198 404H125V413H198V404Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M326.329 376C323.043 376 319.739 375.442 316.579 374.315C300.263 368.48 284.319 361.284 269.197 352.916C242.966 338.411 218.809 320.24 197.39 298.91C175.97 277.573 157.734 253.51 143.178 227.387C134.772 212.312 127.542 196.43 121.69 180.171C118.61 171.615 119.787 162.034 124.833 154.537L144.001 126.062C147.059 121.525 151.939 118.616 157.397 118.087C162.855 117.557 168.209 119.465 172.09 123.33L215.997 167.067C220.158 171.211 222.032 176.909 221.135 182.705C220.238 188.5 216.734 193.373 211.517 196.077L196.178 204.029C207.694 223.76 221.809 242.005 238.16 258.292C254.51 274.579 272.826 288.64 292.634 300.111L300.617 284.832C303.332 279.634 308.23 276.139 314.042 275.251C319.859 274.357 325.58 276.224 329.74 280.368L373.648 324.105C377.528 327.971 379.448 333.305 378.911 338.741C378.374 344.178 375.459 349.045 370.905 352.085L342.319 371.178C337.564 374.361 331.969 376 326.329 376ZM159.186 126.535C158.871 126.535 158.551 126.552 158.231 126.58C155.334 126.865 152.739 128.408 151.122 130.816L131.954 159.291C128.417 164.545 127.594 171.274 129.76 177.291C135.452 193.111 142.487 208.567 150.67 223.242C164.838 248.672 182.599 272.103 203.453 292.875C224.307 313.648 247.823 331.335 273.357 345.459C288.079 353.605 303.595 360.613 319.477 366.288C325.511 368.446 332.266 367.632 337.547 364.102L366.133 345.009C368.55 343.392 370.099 340.813 370.385 337.927C370.67 335.041 369.647 332.212 367.59 330.157L323.683 286.42C321.477 284.222 318.436 283.226 315.35 283.704C312.264 284.177 309.664 286.033 308.224 288.794L298.92 306.595C298.194 307.984 296.908 309.037 295.4 309.481C293.891 309.925 292.245 309.737 290.879 308.963C269.449 296.86 249.675 281.849 232.102 264.344C214.528 246.838 199.453 227.136 187.309 205.794C186.537 204.434 186.343 202.794 186.788 201.291C187.234 199.788 188.291 198.508 189.686 197.785L207.556 188.517C210.328 187.082 212.185 184.492 212.665 181.418C213.14 178.344 212.145 175.316 209.939 173.118L166.032 129.381C164.198 127.542 161.746 126.535 159.186 126.535Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M407 39H371V48H407V39Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M426 39H417V48H426V39Z"
              fill="none"
            />
            <motion.path
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M417 395H398V403H417V395Z"
              fill="none"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="client_name" />
          <input type="email" required placeholder="Email" name="client_email" />
          <textarea rows={8} required placeholder="Message" name="message" />
          <button disabled>Submit</button>
          {error && alert("Message failed to send, Try Again!")}
          {success && alert("The message was sent successfully, thank you for contacting me")}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

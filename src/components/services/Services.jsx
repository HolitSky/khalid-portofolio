import { useRef } from "react";
import myServices from "./servicesData";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        whileInView="animate"
        // ref={ref}
        // animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on helping your brand grow <br />
            and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>Best</motion.b> Services
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>For Your</motion.b> Business
            </h1>
            <button>What Can I Do?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          {myServices.map((service) => {
            return (
              <motion.div
                className="box"
                key={service.id}
                whileHover={{ background: "lightgray", color: "black" }}
              >
                <h2>{service.service_name}</h2>
                <p>{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="service-mobile">
        <div className="textContainer">
          <p>
            I focus on helping your brand grow <br />
            and move forward
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <b>Best</b> Services
            </h1>
          </div>
          <div className="title">
            <h1>
              <b>For Your</b> Business
            </h1>
            <button>What Can I Do?</button>
          </div>
        </div>
        <div className="listContainer">
          {myServices.map((service) => {
            return (
              <div className="box" key={service.id}>
                <h2>{service.service_name}</h2>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-630%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>KHALID SAIFULLAH </motion.h2>
          <motion.h1 variants={textVariants}>Web Developer & UI/UX Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} onClick={() => (window.location.hash = "#Portofolio")}>
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="btn-contact"
              onClick={() => (window.location.hash = "#Contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="khalid" animate="scrollButton" variants={textVariants} />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developement and UI/UX Design
      </motion.div>
      <motion.div className="imageContainer" variants={textVariants} initial="initial" animate="animate">
        <img src="/hero.png" className="img-hero floating" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;

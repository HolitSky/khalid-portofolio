import "./about.scss";
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
    x: 10,
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

const About = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ABOUT ME </motion.h2>
          <motion.h1 variants={textVariants}>
            I have a strong interest in web and mobile development. I have experience working with the
            CodeIgniter 3 framework and managing databases using MySQL. I am also knowledgeable in using the
            React library and the Laravel framework to build web applications, as well as React Native for
            mobile development. Additionally, I am skilled in UI/UX design using Figma. I am highly dedicated
            to continuously learning and developing my skills in the technology industry.
          </motion.h1>
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
    </div>
  );
};

export default About;

import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 2,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      />
      <img src="/final-me-mask.png" className="floating" alt="" />
    </div>
  );
};

export default Test;

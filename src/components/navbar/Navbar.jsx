import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/k-logo.svg" className="img-logo" alt="" />
          <p>DEV</p>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/holit_sky" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/khalid-saifullah-a90a05217" target="blank">
            <img src="/Linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/github.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

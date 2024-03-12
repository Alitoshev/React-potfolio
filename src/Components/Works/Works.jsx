import "./Works.css";
import Upwork from "../../../public/img/Upwork.png";
import Fiverr from "../../../public/img/fiverr.png";
import Amazon from "../../../public/img/amazon.png";
import Shopify from "../../../public/img/Shopify.png";
import Facebook from "../../../public/img/Facebook.png";
import { ThemeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Works() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          inventore, <br />
          maiores corporis ex exercitationem distinctio.
          <br />
          maiores corporis ex exercitationem distinctio consectetur adipisicing
          elit.
          <br />
          Lorem ipsum dolor sit amet.
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;

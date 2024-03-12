import "./Intro.css";
import Github from "../../../public/img/github.png";
import LinkedIn from "../../../public/img/linkedin.png";
import Instagram from "../../../public/img/instagram.png";
import Vector1 from "../../../public/img/Vector1.png";
import Vector2 from "../../../public/img/Vector2.png";
import boy from "../../../public/img/photo_2024-03-09_14-07-24-removebg-preview.png";
import thumbup from "../../../public/img/thumbup.png";
import Crown from "../../../public/img/crown.png";
import glassesimoji from "../../../public/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { ThemeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am </span>
          <span>Diyor Ali </span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Alitoshev">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/diyorbek-alitoshev-1a5575231/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/undefined_dan/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          className="floating-div"
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award " />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;

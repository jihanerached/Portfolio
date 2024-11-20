import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Who I Am.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Interested in data and software engineering, I am passionate about
        applying my technical skills to contribute to innovative projects.
        Motivated by challenges, I aim to deepen my expertise and solve real-world problems through effective solutions.
      </motion.p>

      <div className="mt-10">
        <a
          href="src/assets/RACHED_JIHANE_CV.pdf" // Replace with the correct path to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primary text-white py-2 px-4 rounded-lg text-[15px] font-medium hover:bg-primary-dark transition duration-300 shadow-lg max-w-max"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5"
          >
            <path d="M4.5 0A.5.5 0 0 0 4 .5V6H2a2 2 0 0 0-2 2v7.5A.5.5 0 0 0 .5 16h15a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2h-2V.5a.5.5 0 0 0-.5-.5h-6zM5 1h6v7H5V1zm9 7a1 1 0 0 1 1 1v7H1V9a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V8h2z" />
          </svg>
           View Resume
        </a>
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");

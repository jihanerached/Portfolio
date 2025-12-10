import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Importing icons from React Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} // Increased top space to move content lower
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Jihane</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer
          </p>
          
          {/* Creative Welcome Text */}
          <p className="text-lg text-gray-300 mt-6 max-w-xl">
          <i>"Every project is a new chapter; where ideas evolve into reality, and passion drives every step."</i>
          </p>

          {/* Adding GitHub and LinkedIn Links with Icons */}
          <div className="mt-4 flex gap-6">
            <a
              href="https://github.com/jihanerached" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#915EFF] transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jihane-rached/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#915EFF] transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

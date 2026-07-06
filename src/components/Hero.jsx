import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../assets/portfolio.jpg.jpeg";
import resume from "../assets/2404049_Yuvraj Shekhar_ECE.pdf"
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 text-xl mb-5">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">

              Yuvraj

            </span>

            <br />

            <span className="text-white">

              Shekhar

            </span>

          </h1>

          <div className="text-3xl mt-8 font-semibold text-blue-400">

            <TypeAnimation
              sequence={[
                "Software Developer",
                1800,
                "Full Stack Developer",
                1800,
                "AI Enthusiast",
                1800,
                "Problem Solver",
                1800,
              ]}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">

            Passionate about designing scalable web
            applications, solving algorithmic challenges,
            and building AI-powered products with modern
            technologies.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href={resume}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl transition shadow-lg"
            >
              <FaDownload />

              Resume
            </a>

            <a
              href="#projects"
              className="flex items-center gap-3 border border-blue-500 hover:bg-blue-600 px-7 py-4 rounded-xl transition"
            >
              Projects

              <FaArrowRight />
            </a>

          </div>

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/yuvraj7031"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={34}
                className="hover:text-blue-400 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/yuvraj-shekhar-0634492aa/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={34}
                className="hover:text-blue-400 transition"
              />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-[120px] opacity-30"></div>

            <img
    src={portfolio}
    alt="Yuvraj Shekhar"
    className="
        relative
        w-96
        h-96
        object-cover
        rounded-full
        border-4
        border-blue-500
        shadow-2xl
    "
/>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
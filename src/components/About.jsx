import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

function About() {
    return (
        <section
            id="about"
            className="py-28 px-6 bg-slate-900"
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-5xl font-bold text-center mb-6">

                        About Me

                    </h2>

                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-16"></div>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-3xl font-semibold mb-6">

                            Who am I?

                        </h3>

                        <p className="text-gray-400 leading-8 text-lg">

                            I'm <span className="text-blue-400 font-semibold">
                            Yuvraj Shekhar
                            </span>, a Pre-final-year B.Tech student in
                            Electronics and Communication Engineering at
                            NIT Patna.

                        </p>

                        <p className="text-gray-400 leading-8 text-lg mt-6">

                            I enjoy building scalable web applications,
                            solving algorithmic problems, and integrating
                            AI into real-world products. My primary focus
                            is backend development, Data Structure and Algorithms,System design, and
                            writing clean, maintainable code.

                        </p>

                       

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >

                        <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

                            <FaLaptopCode
                                className="text-blue-500 mb-4"
                                size={34}
                            />

                            <h4 className="text-2xl font-semibold">

                                Full Stack Development

                            </h4>

                            <p className="text-gray-400 mt-4">

                                Building responsive web applications
                                using React, Node.js,
                                Express and MongoDB.

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

                            <FaCode
                                className="text-blue-500 mb-4"
                                size={34}
                            />

                            <h4 className="text-2xl font-semibold">

                                Problem Solving

                            </h4>

                            <p className="text-gray-400 mt-4">

                                Strong foundation in Data Structures,
                                Algorithms, and competitive programming.

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

                            <FaBrain
                                className="text-blue-500 mb-4"
                                size={34}
                            />

                            <h4 className="text-2xl font-semibold">

                                AI Integration

                            </h4>

                            <p className="text-gray-400 mt-4">

                                Integrating LLMs and AI APIs into
                                modern full-stack applications.

                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;
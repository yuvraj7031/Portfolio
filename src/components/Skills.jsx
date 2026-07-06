import { motion } from "framer-motion";

import {
    FaJava,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJs,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiPostman,
    SiGooglegemini,
} from "react-icons/si";

const skills = [
    {
        title: "Languages",
        tech: [
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <FaJs /> },
        ],
    },

    {
        title: "Frontend",
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
        ],
    },

    {
        title: "Backend",
        tech: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express", icon: <SiExpress /> },
        ],
    },

    {
        title: "Database",
        tech: [
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
    },

    {
        title: "AI",
        tech: [
            
            { name: "Gemini API", icon: <SiGooglegemini /> },
        ],
    },

    {
        title: "Tools",
        tech: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="py-28 bg-slate-950 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-bold text-center"
                >
                    Skills
                </motion.h2>

                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5 mb-16"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {skills.map((category) => (
                        <motion.div
                            key={category.title}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-800"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">
                                {category.title}
                            </h3>

                            <div className="space-y-4">

                                {category.tech.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-4 text-lg"
                                    >
                                        <span className="text-3xl text-blue-500">
                                            {item.icon}
                                        </span>

                                        <span>{item.name}</span>
                                    </div>
                                ))}

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;
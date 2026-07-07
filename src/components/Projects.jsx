import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/Projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Projects
        </motion.h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5 mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.title}
              whileHover={{
                y: -10,
              }}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-lg"
            >

              <img
                src={project.image}
                alt={project.title}
                className="
w-full
h-64
object-cover
transition-transform
duration-500
group-hover:scale-110
"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
group
bg-slate-900
rounded-2xl
overflow-hidden
border
border-slate-800
hover:border-blue-500
transition-all
duration-300
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-8">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
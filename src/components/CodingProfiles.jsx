import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
    SiLeetcode,
    SiCodeforces,
    SiCodechef,
} from "react-icons/si";
import coding from "../data/coding";


function CodingProfiles() {
  return (
    <section
      id="coding"
      className="py-28 bg-slate-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Coding Profiles
        </motion.h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5 mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">

          {coding.map((item) => (

            <motion.div
              key={item.platform}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg"
            >

              <div className="text-5xl text-blue-500">

    {item.platform === "LeetCode" && <SiLeetcode />}

    {item.platform === "Codeforces" && <SiCodeforces />}

    {item.platform === "CodeChef" && <SiCodechef />}

</div>

              <h3 className="text-3xl font-bold mt-6">

                {item.platform}

              </h3>

              <p className="mt-5 text-gray-400">

                Problems Solved

              </p>

              <p className="text-2xl font-bold">

                {item.solved}

              </p>

              <p className="mt-5 text-gray-400">

                Rating

              </p>

              <p className="text-xl font-semibold">

                {item.rating}

              </p>

              <a
                href={item.profile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
              >

                Visit Profile

                <FaExternalLinkAlt />

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default CodingProfiles;
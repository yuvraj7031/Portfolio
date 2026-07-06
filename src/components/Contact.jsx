import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
 const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "yuvrajshekhar00@gmail.com",
    link: "mailto:yuvrajshekhar00@gmail.com",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Mobile",
    value: "+91 7643887780",
    link: "tel:+919876543210",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Patna, Bihar, India",
    link: "https://maps.google.com/?q=Patna,Bihar",
  },
];

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5 mb-16"></div>

       <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item, index) => (

    <motion.a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noreferrer"
        whileHover={{
            y: -6,
            scale: 1.02,
        }}
        className={`
            bg-slate-950
            border
            border-slate-800
            rounded-2xl
            p-8
            flex
            gap-5
            items-center
            hover:border-blue-500
            transition

            ${
                index === contacts.length - 1
                    ? "md:col-span-2 md:max-w-xl md:mx-auto w-full"
                    : ""
            }
        `}
    >

        <div className="text-3xl text-blue-500">

            {item.icon}

        </div>

        <div>

            <h3 className="text-2xl font-semibold">

                {item.title}

            </h3>

            <p className="text-gray-400 mt-2">

                {item.value}

            </p>

        </div>

    </motion.a>

))}

        </div>

       

      </div>
    </section>
  );
}

export default Contact;
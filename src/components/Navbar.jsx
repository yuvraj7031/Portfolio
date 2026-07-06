import { useState } from "react";
import { FaBars, FaTimes, } from "react-icons/fa";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (

        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

                <a
                    href="#hero"
                    className="text-2xl font-bold text-blue-500"
                >
                    YS
                </a>

                {/* Desktop */}

                <ul className="hidden md:flex gap-10">

                    <li><a href="#about">About</a></li>

                    <li><a href="#skills">Skills</a></li>

                    <li><a href="#projects">Projects</a></li>

                    <li><a href="#coding">Coding</a></li>

                    <li><a href="#contact">Contact</a></li>

                </ul>

               {/* Mobile Button */}

<button
    className="md:hidden"
    onClick={() => setOpen(!open)}
>
    {open ? <FaTimes size={26} /> : <FaBars size={26} />}
</button>

                {/* Mobile Button */}

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {
                        open
                            ? <FaTimes size={26}/>
                            : <FaBars size={26}/>
                    }
                </button>

            </div>

            {

                open && (

                    <div className="md:hidden bg-slate-900 px-6 py-6 space-y-5">

                        <a href="#about" onClick={()=>setOpen(false)}>About</a>

                        <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>

                        <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>

                        <a href="#coding" onClick={()=>setOpen(false)}>Coding</a>

                        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

                    </div>

                )

            }

        </nav>

    );

}

export default Navbar;
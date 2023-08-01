import React from "react";
import { Link } from "react-scroll";


const NavBar2 = ({ nav, setNav }) => {
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div
            className={
                nav
                    ? "mt-12 fixed w-[100%] bg-black p-10 z-50 ease-in duration-500"
                    : "z-10 fixed w-[100%] ease-in duration-500"
            }
        >
            <div
                className={
                    nav
                        ? "grid grid-cols-1 justify-items-center space-y-4"
                        : "invisible"
                }
            >
                <div className="cursor-pointer w-full grid grid-cols-1 justify-items-center hover:text-gray-400">
                    <Link to="Presentacion" smooth={true} duration={500}>
                        <button onClick={handleNav} className="text-white">A cerca de mí</button>
                    </Link>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <Link to="Pasion" smooth={true} duration={500}>
                        <button onClick={handleNav} className="text-white">Pasión</button>
                    </Link>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <Link to="Experiencia" smooth={true} duration={500}>
                        <button onClick={handleNav} className="text-white">Experiencia</button>
                    </Link>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <Link to="Trabajos" smooth={true} duration={500}>
                        <button onClick={handleNav} className="text-white">Trabajos</button>
                    </Link>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400 ">
                    <Link to="Contacto" smooth={true} duration={500}>
                        <button onClick={handleNav} className="text-white">Contacto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;

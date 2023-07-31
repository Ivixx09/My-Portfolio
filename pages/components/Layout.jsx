import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";

const Layout = () => {
    return (
        <div className="h-screen">
            <div
                style={{
                    backgroundImage:
                        "url('/images/city.jpg')",
                }}
                className="bg-fixed h-full flex flex-col justify-center items-center "
            >
                <div className="bg-fixed bg-contain flex flex-col justify-center items-center">
                    <div className="h-32 flex justify-center items-center my-7">
                        <span className="text-6xl px-4 text-center font-light text-white animate__animated animate__bounceInDown">
                            HOLA, SOY IVO
                        </span>
                    </div>
                    <div className="text-xl capitalize h-10 text-center items-center font-light from-neutral-700">
                        <span className="text-white">
                            Desarrollador web y un entusiasta del UX, UI
                        </span>
                    </div>
                    <IconContext.Provider value={{ color: "white" }}>
                        ;
                        <Link to="Presentacion" smooth={true} duration={500}>
                            <div className="h-20 mt-32 text-center items-center animate-bounce">
                                <AiOutlineDown className="h-full w-2/3 " />
                            </div>
                        </Link>
                    </IconContext.Provider>
                    ;
                </div>
            </div>
        </div>
    );
};

export default Layout;

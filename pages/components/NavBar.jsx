import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
const NavBar = ({ nav, setNav }) => {
    const handleNav = () => {
        setNav(!nav);
    };
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className={
                nav || scroll
                    ? "fixed w-full h-14 z-40 px-2 py-2 bg-black ease-in duration-500"
                    : "fixed w-full h-14 z-40 px-2 py-2 ease-in duration-500"
            }
        >
            <div className="flex h-full justify-between ">
                <div className="flex h-full space-x-4">
                    <img
                        src="./mee.jpg"
                        alt="myPhoto"
                        className="rounded-full h-auto w-auto"
                    />
                    <span className="flex items-center  text-white">
                        Ivo Maydana
                    </span>
                </div>
                <IconContext.Provider value={{ color: "white" }}>
                    <div
                        onClick={handleNav}
                        className="flex items-center h-5/6 w-1/12"
                    >
                        <AiOutlineMenu className="h-full w-full " />
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default NavBar;

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
const NavBar = ({nav, setNav}) => {
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className={nav?"fixed w-full h-14 z-40 px-2 py-2 bg-black" : "fixed w-full h-14 z-40 px-2 py-2"}>
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
                    <div onClick={handleNav}  className="flex items-center h-5/6 w-1/12">
                        <AiOutlineMenu className="h-full w-full " />
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default NavBar;

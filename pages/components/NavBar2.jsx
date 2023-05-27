import React from "react";

const NavBar2 = ({nav}) => {
    return (
        <div className={nav?"mt-12 fixed left-0  w-[100%] sm:w-[50%] bg-black border-gray-700 p-10 z-10 ease-in duration-500":"z-10 fixed top-[-200%] left-0 p-10 ease-in-out duration-500"}>
            <div className="grid  grid-cols-1 justify-items-center space-y-4">
                <div className="cursor-pointer w-full grid grid-cols-1 justify-items-center hover:text-gray-400">
                    <span className="text-white">A cerca de mí</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span className="text-white" >Pasión</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span  className="text-white">Experiencia</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span  className="text-white">Trabajos</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400 ">
                    <span className="text-white" >Contacto</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;

import React from "react";

const NavBar2 = () => {
    return (
        <div className="bg-black border-t-[1px] border-gray-700">
            <div className="grid  grid-cols-1 justify-items-center space-y-4">
                <div className="cursor-pointer w-full grid grid-cols-1 justify-items-center hover:text-gray-400">
                    <span >A cerca de mí</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span >Pasión</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span >Experiencia</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400">
                    <span >Trabajos</span>
                </div>
                <div className="cursor-pointer w-full grid justify-items-center hover:text-gray-400 ">
                    <span >Contacto</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;

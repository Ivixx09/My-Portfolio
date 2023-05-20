import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";
const Layout = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
            }}
            className=" bg-fixed h-screen w-full flex flex-col justify-center items-center "
        >
            <div className="bg-fixed bg-contain flex flex-col justify-center items-center">
                <div className="h-32 flex justify-center items-center my-7">
                    <span className="text-6xl px-4 text-center font-light text-white">
                        HOLA, SOY IVO
                    </span>
                </div>
                <div className="text-xl capitalize h-10 text-center items-center  font-light from-neutral-700">
                    <span className="text-white">
                        Desarrollador web y un entusiasta del UX, UI
                    </span>
                </div>
                <IconContext.Provider value={{ color: "white"}}>
                    ;
                    <div className="h-11 mt-24 text-center items-center">
                        <AiOutlineDown className="h-full w-2/3 " />
                    </div>
                </IconContext.Provider>
                ;
            </div>
        </div>
    );
};

export default Layout;

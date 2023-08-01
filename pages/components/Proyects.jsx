import React from "react";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Proyects = () => {
    const [change1, setChange1] = useState(false);
    const [change2, setChange2] = useState(false);
    const [change3, setChange3] = useState(false);
    const [change4, setChange4] = useState(false);

    function handleChange(event) {
        const data = event.currentTarget.getAttribute("value");
        switch (data) {
            case "Photo1":
                setChange1(true);
                setChange2(false);
                setChange3(false);
                setChange4(false);
                break;
            case "Photo2":
                setChange1(false);
                setChange2(true);
                setChange3(false);
                setChange4(false);
                break;
            case "Photo3":
                setChange1(false);
                setChange2(false);
                setChange3(true);
                setChange4(false);
                break;
            case "Photo4":
                setChange1(false);
                setChange2(false);
                setChange3(false);
                setChange4(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className="pt-20" id="Trabajos">
            <div className="text-center">
                <h1 className="font-wde font-bold text-4xl pb-14">
                    Echa un vistazo a mís proyectos ;)
                </h1>
            </div>
            <div className="grid content-center items-center justify-items-center">
                <div
                    className="w-auto h-5/6 flex justify-center cursor-pointer"
                    value="Photo1"
                    onMouseEnter={handleChange}
                >
                    {change1 ? (
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <FaMagnifyingGlass
                                    className="z-20"
                                    color="white"
                                    size="2em"
                                />
                            </div>
                            <div className="h-full w-full">
                                <img
                                    src="./CountryAppModified2.jpg"
                                    className="w-full h-auto z-10"
                                    alt=""
                                />
                            </div>
                            <div className=" bottom-0 left-0 w-full py-2 bg-blue-500 text-white text-center">
                                Ver más
                            </div>
                        </div>
                    ) : (
                        <img
                            src="./CountryAppModified2.jpg"
                            className="h-full w-full"
                            alt=""
                        />
                    )}
                </div>
                <div
                    className="w-auto h-5/6 flex justify-center cursor-pointer"
                    value="Photo2"
                    onMouseEnter={handleChange}
                >
                    {change2 ? (
                        <div className="relative ">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <FaMagnifyingGlass
                                    className="z-20"
                                    color="white"
                                    size="2em"
                                />
                            </div>
                            <div className="h-full w-full">
                                <img
                                    src="./NFTrade.png"
                                    className="w-full h-auto z-10"
                                    alt=""
                                />
                            </div>
                            <div className=" bottom-0 left-0 w-full py-2 bg-blue-500 text-white text-center">
                                Ver más
                            </div>
                        </div>
                    ) : (
                        <img
                            src="./NFTrade.png"
                            className="h-full w-full"
                            alt=""
                        />
                    )}
                </div>
                <div
                    className="w-auto h-5/6 flex justify-center cursor-pointer"
                    value="Photo3"
                    onMouseEnter={handleChange}
                >
                    {change3 ? (
                        <div className="relative ">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <FaMagnifyingGlass
                                    className="z-20"
                                    color="black"
                                    size="2em"
                                />
                            </div>
                            <div className="h-full w-full">
                                <img
                                    src="./VideogamesModified.jpg"
                                    className="w-full h-auto z-10"
                                    alt=""
                                />
                            </div>
                            <div className=" bottom-0 left-0 w-full py-2 bg-blue-500 text-white text-center">
                                Ver más
                            </div>
                        </div>
                    ) : (
                        <img
                            src="./VideogamesModified.jpg"
                            className="h-full w-full"
                            alt=""
                        />
                    )}
                </div>
                <div
                    className="w-auto h-5/6 flex justify-center cursor-pointer"
                    value="Photo4"
                    onMouseEnter={handleChange}
                >
                    {change4 ? (
                        <div className="relative ">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <FaMagnifyingGlass
                                    className="z-20"
                                    color="gray"
                                    size="2em"
                                />
                            </div>
                            <div className="h-full w-full">
                                <img
                                    src="./OpinionFormosenia.png"
                                    className="w-full h-auto z-10"
                                    alt=""
                                />
                            </div>
                            <div className=" bottom-0 left-0 w-full py-2 bg-blue-500 text-white text-center">
                                Ver más
                            </div>
                        </div>
                    ) : (
                        <img
                            src="./OpinionFormosenia.png"
                            className="h-full w-full"
                            alt=""
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Proyects;

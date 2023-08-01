import React from "react";

const Experience = () => {
    const imgs = [
        "./icons8-css3.svg",
        "./icons8-html-5.svg",
        "./icons8-javascript.svg",
        "./icons8-sql-60.png",
        "./icons8-typescript.svg",
        "./prismaHD.png",
        "./React-icon.svg.png",
        "./next-js.svg",
        "./Tailwind_CSS_Logo.svg.png",
    ];

    return (
        <div className="bg-slate-150 py-16" id="Experiencia">
            <div className="text-3xl font-bold mb-10 text-center font-wde">
                <h1>EXPERIENCIA</h1>
            </div>
            <div className="pt-2 pb-6 mx-14">
                <h2 className="text-center font-2ond text-lg">
                    Soy desarrollador hace aproximadamente 2 años.
                </h2>
                <br />
                <h2 className="text-center font-2ond text-lg">he trabajado con variadas tecnologías</h2>
            </div>
            <div className="text-center py-4 font-2ond text-xl">
                <h3>¡ESTAS SON ALGUNAS DE ELLAS!</h3>
            </div>
            <div className="grid grid-cols-3 gap-12 content-center justify-items-center pt-6">
                {imgs.map((e, i) => {
                    return (
                        <img
                            key={i}
                            src={e}
                            alt="photo icon"
                            className="sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;

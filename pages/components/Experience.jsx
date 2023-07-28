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
        <div className="bg-slate-150 pt-7" id="Experiencia">
            <div className="text-3xl font-thin mb-10 text-center font-2ond">
                <h1>EXPERIENCIA</h1>
            </div>
            <div className="py-4 mx-14">
                <h2 className="text-center font-2ond">
                    Soy desarrollador hace aproximadamente 2 años, he trabajado
                    con variadas tecnologías
                </h2>
            </div>
            <div className="text-center py-4 font-2ond">
                <h3>¡ESTAS SON ALGUNAS DE ELLAS!</h3>
            </div>
            <div className="grid grid-cols-3 gap-10 content-center justify-items-center">
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

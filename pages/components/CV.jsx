import React from "react";

const CV = () => {
    return (
        <div
        id="CV"
            className="my-8 bg-fixed bg-no-repeat"
            style={{
                backgroundImage: `url('/images/orange.jpg')`, // Reemplaza "nombre_de_tu_imagen.jpg" con el nombre de tu imagen
            }}
        >
            <div className="text-center py-4">
                <h1 className="font-2ond font-thin font text-2xl text-black">
                    ¡Si quieres puedes descargar mi hoja de vida!
                </h1>
            </div>
            <div className="h-36 text-center flex justify-center items-center bg-fixed">
                <div className="w-[30%] h-[25%] border-4  border-black flex justify-center items-center animate-pulse hover:bg-black hover:animate-none ">
                    <button className="text-xl font- text-black hover:text-white">DESCARGAR</button>
                </div>
            </div>
        </div>
    );
};

export default CV;

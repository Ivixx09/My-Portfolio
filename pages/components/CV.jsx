import React from "react";

const CV = () => {
    return (
        <div
            className="my-8 bg-fixed"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
            }}
        >
            <div className="text-center py-4">
                <h1 className="font-2ond font-thin font text-2xl text-white">
                    ¡Si quieres puedes descargar mi hoja de vida!
                </h1>
            </div>
            <div className="h-36 text-center flex justify-center items-center bg-fixed">
                <div className="w-[30%] h-[25%] border flex justify-center items-center">
                    <button className="text-xl font-light text-white">DESCARGAR</button>
                </div>
            </div>
        </div>
    );
};

export default CV;

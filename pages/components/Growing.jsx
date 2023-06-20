import React from "react";

const Knowledges = () => {
    return (
        <div className="bg-slate-150 pt-28">
            <h1 className="text-3xl font-bold mb-10 text-center font-2ond">
                COSAS QUE HE APRENDIDO
            </h1>
            <div className="grid grid-cols-1 gap-10 content-between font-wde text-center mx-10">
                <div className="pt-8 bg-local" style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
            }}>
                    <div className="mb-5 mx-4 text-black  shadow-2xl rounded-lg z-20">
                        <h3 className="text-xl font-2ond">SCRUM</h3>
                    </div>
                    <div className="bg- shadow-2xl rounded-xl ">
                        <p>
                            El desarrollo de páginas web no es nada sencillo,
                            menos si tenemos pensado hacer algo grande
                        </p>
                        <br />
                        <p>
                            Por ello me he interesado desde un principio en la
                            manera de aplicar alguna metodología ágil como el
                            SCRUM
                        </p>
                        <br />
                        <p>
                            Me he capacitado desde el bootcamp SOY HENRY
                            trabajando de manera eficiente y eficaz con este
                            método, logrando quedar con mi grupo entre los tres
                            primeros en el proyecto final, y creo que esta forma
                            de organización fue una de las grandes aliadas en
                            ese hito
                        </p>
                    </div>
                </div>
                <div className="bg-local" style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
            }}>
                    <div className="mb-5">
                        <h3>DESARROLLO</h3>
                    </div>
                    <div>
                        <p>
                            El desarrollo como programador fue un proceso duro y
                            complicado, pero con constancia logré terminar el
                            curso y comenzar a trabajar de manera freelancer
                        </p>
                        <br />
                        <p>
                            Siempre intentando enfocarme en la escalabilidad y
                            modularidad del código para hacer que el proyecto
                            sea lo más prolijo y entendible
                        </p>
                        <br />
                        <p>
                            Me encantan los desarrollos web y estoy con muchos
                            ánimos de aprender desarrollo móvil
                        </p>
                    </div>
                </div>
                <div className="bg-local" style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
            }}>
                    <div className="mb-5">
                        <h3>CRECER</h3>
                    </div>
                    <div>
                        <p>
                            No me conformo con lo que ya sé, siempre busco
                            crecer y mejorar mis habilidades. Mantengo una
                            mentalidad de aprendizaje constante y estoy abierto
                            a nuevos desafíos y oportunidades de desarrollo
                            personal y profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;

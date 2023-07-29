import React from "react";


const Knowledges = () => {
    return (
        <div className="bg-slate-150 pt-28" id="Pasion">
            <h1 className="text-3xl font-bold mb-10 text-center font-2ond">
                COSAS QUE HE APRENDIDO
            </h1>
            <div className="grid grid-cols-1 gap-10 content-between font-wde text-center mx-10">
                <div className="pt-8 relative inline-block text-center">
                    <img src="onda.png" alt="onda" />
                    <div className="absolute mb-5 mx-4 shadow-2xl rounded-lg top-1/4">
                        <div className=" text-black">
                            <h3 className="text-xl font-2ond">SCRUM</h3>
                        </div>
                        <div className="shadow-2xl rounded-xl text-lg">
                            <p>
                                El desarrollo de páginas web no es nada
                                sencillo, menos si tenemos pensado hacer algo
                                grande
                            </p>
                            <br />
                            <p>
                                Por ello me he interesado desde un principio en
                                la manera de aplicar alguna metodología ágil
                                como el SCRUM
                            </p>
                            <br />
                            <p>
                                Me he capacitado desde el bootcamp SOY HENRY
                                trabajando de manera eficiente y eficaz con este
                                método, logrando quedar con mi grupo entre los
                                tres primeros en el proyecto final, y creo que
                                esta forma de organización fue una de las
                                grandes aliadas en ese hito
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pb-8 relative inline-block text-center">
                    <img className=" -rotate-90" src="/flecha.png" alt="" />
                    <div className="absolute  mx-4 shadow-2xl rounded-lg top-[9%]">
                        <div className="mb-5 text-xl">
                            <h3>DESARROLLO</h3>
                        </div>
                        <div className="text-lg">
                            <p>
                                El desarrollo como programador fue un proceso
                                duro y complicado, pero con constancia logré
                                terminar el curso y comenzar a trabajar de
                                manera freelancer
                            </p>
                            <br />
                            <p>
                                Siempre intentando enfocarme en la escalabilidad
                                y modularidad del código para hacer que el
                                proyecto sea lo más prolijo y entendible
                            </p>
                            <br />
                            <p>
                                Me encantan los desarrollos web y estoy con
                                muchos ánimos de aprender desarrollo móvil
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pb-8 relative inline-block text-center">
                    <img src="onda.png" alt="onda" />
                    <div className="absolute mx-4 shadow-2xl rounded-lg top-[15%]">
                        <div className="mb-6 text-xl">
                            <h3>CRECER</h3>
                        </div>
                        <div className="text-lg">
                            <p>
                                No me conformo con lo que ya sé, siempre busco
                                crecer y mejorar mis habilidades. Mantengo una
                                mentalidad de aprendizaje constante y estoy
                                abierto a nuevos desafíos y oportunidades de
                                desarrollo personal y profesional.
                            </p>
                            <br />
                            <p>
                                Me encantan tener retos diarios y lecturas interesantes, también no solo entrenarme mentalmente
                                sino que también física y espiritualmente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;

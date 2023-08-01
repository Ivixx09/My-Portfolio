import React from "react";

const Knowledges = () => {
    return (
        <div className="bg-slate-150 pt-20" id="Pasion">
            <h1 className="text-3xl font-bold text-center font-wde">
                COSAS QUE HE APRENDIDO
            </h1>
            <div className="grid grid-cols-1 gap-12 content-between font-wde text-center mx-10 pt-20">
                <div
                    className="bg-local bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url('/images/onda2.jpg')`,
                    }}
                >
                    <div className=" text-black">
                        <h3 className="text-xl font-2ond pb-5">SCRUM</h3>
                    </div>
                    <div className="shadow-2xl rounded-xl text-lg">
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
                <div className="relative inline-block text-center">
                    <div
                        className="bg-local bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url('/images/flecha.png')`,
                        }}
                    >
                        <div className="mb-5 text-xl">
                            <h3>DESARROLLO</h3>
                        </div>
                        <div className="shadow-2xl rounded-xl text-lg">
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
                                Los retos que me brinda la programación no solo 
                                me ayudan en relación al desarrollo laboral
                                sino también al desarrollo personal ya que me 
                                permite tener una visión no tan holísitica 
                                de los problemas sino que me inspiró a 
                                aplicar en mi vida el gran refrán 
                                <br />
                                <em>&quot;Divide and conquer&quot;</em>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative inline-block text-center">
                    <div
                        className="bg-local bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url('/images/onda2.jpg')`,
                        }}
                    >
                        <div className="mb-6 text-xl">
                            <h3>CRECER</h3>
                        </div>
                        <div className="shadow-2xl rounded-xl text-lg">
                            <p>
                                No me conformo con lo que ya sé, siempre busco
                                crecer y mejorar mis habilidades. Mantengo una
                                mentalidad de aprendizaje constante y estoy
                                abierto a nuevos desafíos y oportunidades de
                                desarrollo personal y profesional.
                            </p>
                            <br />
                            <p>
                                Me encantan tener retos diarios y lecturas
                                interesantes, también no solo entrenarme
                                mentalmente sino que también física y
                                espiritualmente.
                            </p>
                            <br />
                            <p>
                                La programación trajo a mi vida los retos
                                diarios, siendo capaz de explotar mi potencial
                                en cada tramo de la misma. Por ello es que me
                                gusta tanto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;

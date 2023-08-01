import React from "react";

const About = () => {
    return (
        <div className="pt-20 bg-slate-150" id="Presentacion">
            <div className="text-center">
                <span className="font-wde text-2xl lg:text-4xl 2xl:text-6xl">UN POCO A CERCA DE MÍ</span>
            </div>
            <div className="h-rounded-full flex justify-center my-10">
                <div className="h-2/6 w-2/6">
                    <img src="./newPhoto.jpg" alt="" className="rounded-full" />
                </div>
            </div>
            <div className="text-center lg:mx-20">
                <p className="font-2ond text-lg lg:text-xl 2xl:text-2xl">
                    ¡Hola! Soy Ivo, un Full Stack Web Developer graduado del
                    bootcamp Henry. Mi enfoque se centra en crear experiencias
                    web cautivadoras y funcionales. Con una sólida formación en
                    tecnologías como JavaScript, HTML, CSS, React.js y Node.js,
                    desarrollo aplicaciones web eficientes y escalables. Soy
                    apasionado, creativo y orientado a soluciones, siempre
                    buscando superar desafíos y encontrar nuevas formas
                    innovadoras de abordar problemas.
                </p>
                <br />
                <p className="font-2ond text-lg lg:text-xl 2xl:text-2xl">
                    {" "}
                    Explora mi portafolio web para descubrir proyectos
                    emocionantes y soluciones web impactantes. Si buscas un
                    desarrollador web dedicado y entusiasta, ¡no dudes en
                    contactarme! Estoy emocionado de colaborar contigo y hacer
                    realidad tus proyectos web.
                </p>
            </div>
        </div>
    );
};

export default About;

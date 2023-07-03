import React from "react";
import { useState } from "react";

const Proyects = () => {
    const [change, setChange] = useState(false);
    const [change1, setChange1] = useState(false);
    const [change2, setChange2] = useState(false);
    const [change3, setChange3] = useState(false);

    const imgs = [
        "./CountryAppModified2.jpg",
        "NFTrade.png",
        "OpinionFormosenia.png",
        "VideogamesModified.jpg",
    ];

    function handleChange(i) {
        console.log(i.target.value)
        if (i === 0) {
            setChange(true);
            setChange1(false);
            setChange2(false);
            setChange3(false);
        } else if (i === 1) {
            setChange(false);
            setChange1(true);
            setChange2(false);
            setChange3(false);
        } else if (i === 3) {
            setChange(false);
            setChange1(false);
            setChange2(true);
            setChange3(false);
        } else {
            setChange(false);
            setChange1(false);
            setChange2(false);
            setChange3(true);
        }
    }
    function handleChange2(e) {
        if (i === 0) {
            setChange(false);
        }
    }

    return (
        <div>
            <div className="text-center">
                <h1 className="font-2ond text-2xl">
                    Echa un vistazo a mís proyectos ;)
                </h1>
            </div>
            <div
                className="grid content-center items-center justify-items-center"
                onPointerLeave={(i) => handleChange(i)}
            >
                {change ? (
                    <div>Diste click</div>
                ) : (
                    <div>
                        <img src="./CountryAppModified2.jpg" alt="NFTrade" />
                    </div>
                )}
                {change1 ? (
                    <div>Diste click</div>
                ) : (
                    <div>
                        <img src="NFTrade.png" alt="NFTrade" />
                    </div>
                )}
                {change2 ? (
                    <div>Diste click</div>
                ) : (
                    <div>
                        <img src="OpinionFormosenia.png" alt="NFTrade" />
                    </div>
                )}
                {change3 ? (
                    <div>Diste click</div>
                ) : (
                    <div>
                        <img src="VideogamesModified.jpg" alt="NFTrade" />
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Proyects;
{
    /* {imgs.map((e, i) => {
                    return (
                        <div
                            key={i}
                            className="w-auto h-5/6 flex justify-center cursor-pointer"
                        >
                            {change ? (
                                <div>Diste click</div>
                            ) : (
                                <img
                                    key={i}
                                    src={e}
                                    alt="photo icon"
                                    className="h-full w-full"
                                    onPointerEnter={() => handleChange(i)} 
                                />
                            )}
                        </div>
                    );
                })} */
}

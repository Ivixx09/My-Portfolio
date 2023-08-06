import React from 'react'
import { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Proyects = () => {
  const [change1, setChange1] = useState(false)
  const [change2, setChange2] = useState(false)
  const [change3, setChange3] = useState(false)
  const [change4, setChange4] = useState(false)

  function handleChange(event) {
    const data = event.currentTarget.getAttribute('value')
    switch (data) {
      case 'Photo1':
        setChange1(true)
        setChange2(false)
        setChange3(false)
        setChange4(false)
        break
      case 'Photo2':
        setChange1(false)
        setChange2(true)
        setChange3(false)
        setChange4(false)
        break
      case 'Photo3':
        setChange1(false)
        setChange2(false)
        setChange3(true)
        setChange4(false)
        break
      case 'Photo4':
        setChange1(false)
        setChange2(false)
        setChange3(false)
        setChange4(true)
        break
      default:
        break
    }
  }

  return (
    <div className="py-20" id="Trabajos">
      <div className="text-center">
        <h1 className="font-wde font-bold text-2xl lg:text-4xl 2xl:text-6xl text-center pb-14">
          Echa un vistazo a mís proyectos ;)
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 content-center items-center justify-items-center">
        <div
          className="w-auto h-4/6 flex justify-center cursor-pointer"
          value="Photo1"
          onMouseEnter={handleChange}
        >
          <div className="relative trensition-all duration-500 hover:scale-110">
            <div
              className={
                change1
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              <>
                <FaMagnifyingGlass className="z-20" color="white" size="2em" />
              </>
            </div>
            <div className="h-full w-full">
              <img
                src="./CountryAppModified2.jpg"
                className="w-full h-full z-10"
                alt=""
              />
            </div>
            <div
              className={
                change1
                  ? 'absolute w-full bg-blue-500 text-white text-center transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              Ver más
            </div>
          </div>
        </div>
        <div
          className="w-auto h-4/6 flex justify-center cursor-pointer"
          value="Photo2"
          onMouseEnter={handleChange}
        >
          <div className="relative trensition-all duration-500 hover:scale-110">
            <div
              className={
                change2
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              <>
                <FaMagnifyingGlass className="z-20" color="white" size="2em" />
              </>
            </div>
            <div className="h-full w-full">
              <img src="./NFTrade.png" className="w-full h-full z-10" alt="" />
            </div>
            <div
              className={
                change2
                  ? 'absolute w-full  bg-blue-500 text-white text-center transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              Ver más
            </div>
          </div>
        </div>
        <div
          className="w-auto h-4/6 flex justify-center cursor-pointer"
          value="Photo3"
          onMouseEnter={handleChange}
        >
          <div className="relative trensition-all duration-500 hover:scale-110">
            <div
              className={
                change3
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              <>
                <FaMagnifyingGlass className="z-20" color="black" size="2em" />
              </>
            </div>
            <div className="h-full w-full">
              <img
                src="./VideogamesModified.jpg"
                className="w-full h-full z-10"
                alt=""
              />
            </div>
            <div
              className={
                change3
                  ? 'absolute w-full  bg-blue-500 text-white text-center transition-all duration-500 ease-in-out'
                  : 'hidden'
              }
            >
              Ver más
            </div>
          </div>
        </div>
        <div
          className="w-auto h-4/6 flex justify-center cursor-pointer"
          value="Photo4"
          onMouseEnter={handleChange}
        >
          <div className="relative trensition-all duration-500 hover:scale-110">
            <div
              className={
                change4
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-in-out'
                  : 'hidden'
              }
            >
              <>
                <FaMagnifyingGlass className="z-20" color="gray" size="2em" />
              </>
            </div>
            <div className="h-full w-full">
              <img
                src="./OpinionFormosenia.png"
                className="w-full h-full z-10"
                alt=""
              />
            </div>
            <div
              className={
                change4
                  ? 'absolute w-full  bg-blue-500 text-white text-center transition-all duration-700 ease-in-out'
                  : 'hidden'
              }
            >
              Ver más
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyects

// import React from "react";
// import { useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// const Proyects = () => {
//     const [change1, setChange1] = useState(false);
//     const [change2, setChange2] = useState(false);
//     const [change3, setChange3] = useState(false);
//     const [change4, setChange4] = useState(false);

//     function handleChange(event) {
//         const data = event.currentTarget.getAttribute("value");
//         switch (data) {
//             case "Photo1":
//                 setChange1(true);
//                 setChange2(false);
//                 setChange3(false);
//                 setChange4(false);
//                 break;
//             case "Photo2":
//                 setChange1(false);
//                 setChange2(true);
//                 setChange3(false);
//                 setChange4(false);
//                 break;
//             case "Photo3":
//                 setChange1(false);
//                 setChange2(false);
//                 setChange3(true);
//                 setChange4(false);
//                 break;
//             case "Photo4":
//                 setChange1(false);
//                 setChange2(false);
//                 setChange3(false);
//                 setChange4(true);
//                 break;
//             default:
//                 break;
//         }
//     }

//     return (
//         <div className="py-20" id="Trabajos">
//             <div className="text-center">
//                 <h1 className="font-wde font-bold text-2xl lg:text-4xl 2xl:text-6xl text-center pb-14">
//                     Echa un vistazo a mís proyectos ;)
//                 </h1>
//             </div>
//             <div className="grid content-center items-center justify-items-center">
//                 <div
//                     className="w-auto h-5/6 flex justify-center cursor-pointer"
//                     value="Photo1"
//                     onMouseEnter={handleChange}
//                 >
//                     {change1 ? (
//                         <div className="relative h-[110%]">
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                                 <FaMagnifyingGlass
//                                     className="z-20"
//                                     color="white"
//                                     size="2em"
//                                 />
//                             </div>
//                             <div className="h-full w-full">
//                                 <img
//                                     src="./CountryAppModified2.jpg"
//                                     className="w-full h-full z-10"
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="absolute  w-full  bg-blue-500 text-white text-center">
//                                 Ver más
//                             </div>
//                         </div>
//                     ) : (
//                         <img
//                             src="./CountryAppModified2.jpg"
//                             className="h-full w-full"
//                             alt=""
//                         />
//                     )}
//                 </div>
//                 <div
//                     className="w-auto h-5/6 flex justify-center cursor-pointer"
//                     value="Photo2"
//                     onMouseEnter={handleChange}
//                 >
//                     {change2 ? (
//                         <div className="relative h-[110%]">
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                                 <FaMagnifyingGlass
//                                     className="z-20"
//                                     color="white"
//                                     size="2em"
//                                 />
//                             </div>
//                             <div className="h-full w-full">
//                                 <img
//                                     src="./NFTrade.png"
//                                     className="w-full h-full z-10"
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="absolute w-full bg-blue-500 text-white text-center">
//                                 Ver más
//                             </div>
//                         </div>
//                     ) : (
//                         <img
//                             src="./NFTrade.png"
//                             className="h-full w-full"
//                             alt=""
//                         />
//                     )}
//                 </div>
//                 <div
//                     className="w-auto h-5/6 flex justify-center cursor-pointer"
//                     value="Photo3"
//                     onMouseEnter={handleChange}
//                 >
//                     {change3 ? (
//                         <div className="relative h-[110%]">
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                                 <FaMagnifyingGlass
//                                     className="z-20"
//                                     color="black"
//                                     size="2em"
//                                 />
//                             </div>
//                             <div className="h-full w-full">
//                                 <img
//                                     src="./VideogamesModified.jpg"
//                                     className="w-full h-full z-10"
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="absolute w-full bg-blue-500 text-white text-center">
//                                 Ver más
//                             </div>
//                         </div>
//                     ) : (
//                         <img
//                             src="./VideogamesModified.jpg"
//                             className="h-full w-full"
//                             alt=""
//                         />
//                     )}
//                 </div>
//                 <div
//                     className="w-auto h-5/6 flex justify-center cursor-pointer"
//                     value="Photo4"
//                     onMouseEnter={handleChange}
//                 >
//                     {change4 ? (
//                         <div className="relative h-[110%]">
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                                 <FaMagnifyingGlass
//                                     className="z-20"
//                                     color="gray"
//                                     size="2em"
//                                 />
//                             </div>
//                             <div className="h-full w-full">
//                                 <img
//                                     src="./OpinionFormosenia.png"
//                                     className="w-full h-full z-10"
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="absolute w-full bg-blue-500 text-white text-center">
//                                 Ver más
//                             </div>
//                         </div>
//                     ) : (
//                         <img
//                             src="./OpinionFormosenia.png"
//                             className="h-full w-full"
//                             alt=""
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Proyects;

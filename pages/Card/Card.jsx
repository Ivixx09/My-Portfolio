import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useState } from 'react'

const Card = ({ value, link, img }) => {
  return (
    <section className="grid lg:grid-cols-1 content-center items-center justify-items-center">
      <div
        className="w-auto h-4/6 flex justify-center cursor-pointer"
        value={value}
      >
        <div className="relative trensition-all duration-500 hover:scale-110">
          <a
            href={link}
            target="_blank"
            className="opacity-0 hover:opacity-100 absolute grid content-center justify-items-center z-20 transition-all h-full w-full duration-500 ease-in-out"
          >
            <div>
              <FaMagnifyingGlass className="z-20" color="pink" size="2em" />
            </div>
          </a>
          <div className="h-full w-full">
            <img src={img} className="w-full h-full z-10" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card

{
  /* <div className="opacity-0 hover:opacity-100 absolute w-full  bg-blue-500 text-white text-center transition-all duration-500 ease-in-out">
    Ver más
  </div> */
}

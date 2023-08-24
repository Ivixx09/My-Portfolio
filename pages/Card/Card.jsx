import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

const Card = ({ value, link, img, demo, description, title, technologies }) => {
  return (
    <section className="flex flex-col md:flex-row w-[90%] bg-black justify-between items-center rounded-lg space-y-12 border-4 border-blue-700 lg:w-[70%] xl:w-[65%] 2xl:w-[50%]">
      <div className="w-full flex flex-col space-y-8 pt-4 px-4">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl"> {title} </h1>
          <div className="flex space-x-2">
            <a href={link} target="_blank">
              <FaGithub color="white" size="2em" />
            </a>
            <a
              href={demo}
              target="_blank"
              className={demo === 'No existe' ? 'hidden' : 'flex'}
            >
              <FaLink color="white" size="2em" />
            </a>
          </div>
        </div>
        <div className="text-white text-lg flex flex-col space-y-4 justify-center w-full">
          <div>
            <p>{description}</p>
          </div>
          <div>
            <ul className="flex space-x-4 ">
              {technologies.map((e) => {
                return (
                  <li
                    key={e}
                    className="border-2 w-[70%] flex justify-center text-sm border-blue-700"
                  >
                    {e}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-4 2xl:w-[50%] md:mr-4">
        <img src={img} alt={value} />
      </div>
    </section>
  )
}

export default Card

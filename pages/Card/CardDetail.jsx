import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ProyectsCard = ({ title, description, links, image }) => {
  const data = {
    title: 'COUNTRYAPP',
    img: '/CountryAppModified2.jpg',
    description: 'Esta es una descripción.',
    various: {
      link: 'https://github.com/Ivixx09/CountryApp',
      demo: '',
    },
    value: 'Photo1',
  }
  return (
    <section className="bg-slate-100 w-2/4">
      <div className="flex justify-end">
        <AiOutlineClose color="red" size="1em" />
      </div>
      <div className="text-center divide-y-2">
        <div>
          <h1 className="py-2 text-base font-wde">{data.title}</h1>
        </div>
        <div className="grid justify-items-center">
          <img src={data.img} alt={data.img} className="py-5 w-[95%]" />
        </div>
      </div>
      <div className="text-center font-2ond py-11">
        <p>{data.description}</p>
      </div>
      <div className="flex justify-center space-x-[25%]">
        <div className="text-black hover:text-white cursor-pointer w-[30%] lg:w-[20%] h-[25%] border-2  border-slate-400 flex justify-center items-center animate-pulse hover:bg-black hover:animate-none">
          <button className="">Code</button>
        </div>
        <div className="text-black hover:text-white cursor-pointer w-[30%] lg:w-[20%] h-[25%] border-2  border-slate-400 flex justify-center items-center animate-pulse hover:bg-black hover:animate-none">
          <button className="">Demo</button>
        </div>
      </div>
    </section>
  )
}

export default ProyectsCard

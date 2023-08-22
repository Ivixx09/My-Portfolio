import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'

const Proyects = () => {
  const proyects = [
    {
      title: 'CountryApp',
      img: './CountryAppModified2.jpg',
      description: 'Esta es una descripción.',
      various: {
        link: 'https://github.com/Ivixx09/CountryApp',
        demo: '',
      },
      value: 'Photo1',
    },
    {
      title: 'CountryApp',
      img: './NFTrade.png',
      description: 'Esta es una descripción.',
      various: {
        link: 'https://github.com/NicoCastagnet/PF-NFTRADE',
        demo: '',
      },
      value: 'Photo2',
    },
    {
      title: 'CountryApp',
      img: './OpinionFormosenia.png',
      description: 'Esta es una descripción.',
      various: {
        link: 'https://github.com/AhrensOG/NewspaperProject-Client',
        demo: '',
      },
      value: 'Photo3',
    },
    {
      title: 'CountryApp',
      img: './VideogamesModified.jpg',
      description: 'Esta es una descripción.',
      various: {
        link: 'https://github.com/Ivixx09/PI-VIdeoGames',
        demo: '',
      },
      value: 'Photo4',
    },
  ]

  return (
    <div className="py-20" id="Trabajos">
      <div className="text-center">
        <h1 className="font-wde font-bold text-2xl lg:text-4xl 2xl:text-6xl text-center pb-14">
          Echa un vistazo a mís proyectos ;)
        </h1>
      </div>
      {proyects.map((e) => {
        return (
          <Card
            link={e.various.link}
            img={e.img}
            value={e.value}
            key={e.value}
          />
        )
      })}
    </div>
  )
}

export default Proyects

{
}

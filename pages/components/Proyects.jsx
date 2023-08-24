import React from 'react'
import Card from '../Card/Card'
// import { useState } from 'react'

const Proyects = () => {
  const proyects = [
    {
      title: 'CountryApp',
      img: './CountryAppModified2.jpg',
      description:
        'Esta SPA fue hecha en el bootcamp SoyHenry, la misma tiene uso de una base de datos. Posee un CRD completo. Las tecnologías usadas fueron React, Redux, PostgreSQL, Javascript, HTML y CSS.',
      various: {
        link: 'https://github.com/Ivixx09/CountryApp',
        demo: 'No existe',
      },
      value: 'CountryApp',
      technologies: ['PostgreSQL', 'JavaScript', 'CSS', 'React', 'Redux'],
    },
    {
      title: 'NFTrade',
      img: './NFTrade.png',
      description:
        'Esta es una página que hicimos como proyecto final en Henry, esta misma se desarrolló en base al concepto de la compra y venta de NFTs incluye la compra y venta en el mercado entre distintos usuarios. Posee una base de datos con un CRUD habilitado y tiene un dashboard.',
      various: {
        link: 'https://github.com/NicoCastagnet/PF-NFTRADE',
        demo: 'https://pf-nftrade.netlify.app',
      },
      value: 'NFTrade',
      technologies: ['Prisma', 'Typescript', 'Tailwind', 'Next'],
    },
    {
      title: 'OpinionFormoseña',
      img: './OpinionFormosenia.png',
      description:
        'Mi primer proyecto freelance para un portal de noticias de mí ciudad. Lo hice de manera cooperativa bajo el marco de trabajo SCRUM igual que el PF de Henry',
      various: {
        link: 'https://github.com/AhrensOG/NewspaperProject-Client',
        demo: 'http://invalid.invalid/opinionformosea-4ec.com.ar',
      },
      value: 'NewsPaper',
      technologies: ['PostgreSQL', 'JavaScript', 'Tailwind', 'Next'],
    },
    {
      title: 'Videogames',
      img: './VideogamesModified.jpg',
      description:
        'Esta SPA fue hecha en el bootcamp SoyHenry, la misma tiene uso de una base de datos. Posee un CRD completo. Las tecnologías usadas fueron React, Redux, PostgreSQL, Javascript, HTML y CSS.',
      various: {
        link: 'https://github.com/Ivixx09/PI-VIdeoGames',
        demo: 'No existe',
      },
      value: 'Videogames',
      technologies: ['PostgreSQL', 'JavaScript', 'CSS', 'React', 'Redux'],
    },
  ]

  return (
    <section className="py-20" id="Trabajos">
      <div className="text-center">
        <h1 className="font-wde font-bold text-2xl lg:text-4xl 2xl:text-6xl text-center pb-14">
          Echa un vistazo a mís proyectos ;)
        </h1>
      </div>
      <div className="grid grid-cols-1 space-y-12 md:space-y-5 justify-items-center">
        {proyects.map((e) => {
          return (
            <Card
              title={e.title}
              demo={e.various.demo}
              link={e.various.link}
              img={e.img}
              description={e.description}
              value={e.value}
              key={e.value}
              technologies={e.technologies}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Proyects

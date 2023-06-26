import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import Layout from './components/Layout'
import { useState } from 'react'
import About from './components/About'
import Growing from './components/Growing'
import Experience from './components/Experience'
import CV from './components/CV'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nav, setNav] = useState(false)
  return (
    <main>
      <NavBar nav={nav} setNav={setNav}/>
      <NavBar2 nav={nav} setNav={setNav}/> 
      <Layout/>
      <About/>
      <Growing/>
      <Experience/>
      <CV/>
    </main>
  )
}

import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar/>
      {/* <NavBar2/>  */}
      <Layout/>
    </main>
  )
}

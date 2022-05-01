import type { NextPage } from 'next'
import Head from 'next/head'
import TextContentWithImage from '../components/ContentWriting'
import FooterLogos from '../components/FooterLogos'
import HeaderBanner from '../components/index/HeaderBanner'
import InfoGraphics from '../components/infographics'
import Navbar from '../components/Navbar'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Praktyki Erasmus+ ZSE Faro & Algarve 2022</title>
        <meta name="description" content="Strona podsumowująca praktyki zawodowe Erasmus+ Zespołu Szkół Elektronicznych w Rzeszowie - Faro, Portugalia 2022" />
      </Head>
      <Navbar />
      <HeaderBanner />

      <FooterLogos />

    </div>
  )
}

export default Home

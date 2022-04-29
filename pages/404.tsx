import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBanner from '../components/index/HeaderBanner'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Error 404</title>
      </Head>

      <Navbar />
      <h1>404</h1>
    </div>
  )
}

export default Home

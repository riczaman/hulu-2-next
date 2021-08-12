import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>
      <Header />
      <Navbar />
      {/* Nav */}
      {/* Content */}
    </div>
  )
}

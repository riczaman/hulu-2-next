import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>
      <Header />
      <Navbar />
      <Content /> 
    </div>
  )
}

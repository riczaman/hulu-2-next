import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import requests from '../utils/requests'

export default function Home({data}) {

  return (
    <div className>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>
      <Header />
      <Navbar />
      <Content results={data.results}/> 
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  const data = await res.json(); 

  return{
    props: {data}
  }
}
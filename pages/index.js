import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'


export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='max-w-6xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>

      <Footer/>
    </div>

  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.info(err))
  return {
    props: {
      products
    }
  }
}

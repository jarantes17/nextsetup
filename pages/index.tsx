import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = ({ children }, ...props) => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home

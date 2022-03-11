import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>TailwindCSS Next Template</title>
        <meta name="description" content="TailwindCSS Next Template" />
      </Head>

      <main className="max-w-7xl w-full border border-red-500">
        <div className="w-full">
          <h1>Home</h1>
        </div>
      </main>
    </div>
  )
}

export default Home

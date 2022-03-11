import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/vercel.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TailwindCSS Next Template</title>
        <meta name="description" content="TailwindCSS Next Template" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center bg-zinc-50 text-slate-900">
        <header className="w-full bg-purple-500 grid place-items-center">
          <nav className="max-w-7xl w-full flex justify-between px-5 py-2">
            <div className="flex justify-center w-48 h-14 ">
              <Image src={Logo} alt="Logo" layout="intrinsic" />
            </div>
            <ul className="flex justify-between items-center text-stone-100">
              <li className="pr-5 font-bold">
                <Link href="#">Home</Link>
              </li>
              <li className="pr-5 font-bold">
                <Link href="#">About</Link>
              </li>
              <li className="font-bold">
                <Link href="#">Services</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col flex-grow items-center">
          <div className="max-w-7xl w-full flex px-5">
            <h1>Home</h1>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home

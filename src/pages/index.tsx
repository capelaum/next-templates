import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from 'styles/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Home" />
        <title>Home</title>
      </Head>
      <S.Wrapper>
        <h1>Home</h1>
      </S.Wrapper>
    </>
  )
}

export default Home

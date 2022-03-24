import { NextPage } from 'next'
import Link from '../src/components/Link'

const Custom500: NextPage = () => {
  return (
    <>
      <h1>Oops.. algo de errado não está certo. Caimos na página 500 :O</h1>
      <Link href="/">Ir para a home</Link>
    </>
  )
}

export default Custom500

import { NextPage } from 'next'
import Link from '../src/components/Link'

const Custom404: NextPage = () => {
  return (
    <>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link href="/">Ir para a home</Link>
    </>
  )
}

export default Custom404

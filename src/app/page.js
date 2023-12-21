import Image from 'next/image'
import Splash from './splash/page'
import NavMenu from "./components/NavMenu"


export default function Home() {
  return (
    <>
      <NavMenu />
      <main>

        <div>
          <h1>Description</h1>
          <Splash/>
        </div>

        <div>
          <h1>Center</h1>
        </div>

      </main>
    </>

  )
}

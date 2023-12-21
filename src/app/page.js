import Image from 'next/image'
import Splash from './splash/page'
import NavMenu from "./components/NavMenu"
import { Button, Dropdown } from "flowbite-react";


export default function Home() {
  return (
    <>
      <NavMenu />
      <main>
        <Splash/>
      </main>
    </>

  )
}

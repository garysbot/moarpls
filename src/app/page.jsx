// & Add Components Here
// & Main Component Management
import Splash from './splash/page';
import NavMenu from './components/NavMenu';

export default function Home() {
  return (
    <>
      <NavMenu />
      <main>
        <Splash />
      </main>
    </>

  );
}

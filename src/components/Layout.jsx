import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NavMenu from './NavMenu';

const Layout = () => {
  return (
    <div className="mx-auto ">
      <nav className="fixed top-0 w-full z-10 bg-white">
        <div style={{ borderBottom: "1.5px solid rgb(192, 191, 191)" }}>
          <NavBar />
        </div>
        <NavMenu />
      </nav>
      <main className="mt-32">
        <Outlet />
      </main>
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

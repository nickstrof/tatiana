
import { Outlet } from "react-router-dom";
import { Icons, Header, Footer, BackToTopButton } from "./components";

import useAnimation from '../src/hooks/useAnimation';
import useAnchor from '../src/hooks/useAnchor';

const Layout = () => {

    // Custom Hook
    useAnimation();
    useAnchor();

  return (
    <>
        <Icons />
        <Header />
        <div className="main">
            <Outlet />
        </div>
        <Footer />
        <BackToTopButton />
    </>
  )
}

export default Layout
import { useEffect, useState } from "react";
import HeaderSite from "./HeaderSite/HeaderSite";
import HeaderSocial from "./HeaderSocial/HeaderSocial";
import HeaderColorMode from "./HeaderColorMode/HeaderColorMode";

import "./Header.css";

const Header = () => {
  	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsFixed(window.scrollY > 50);
		
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

  return (
    <>
      <div className={`header pad ${isFixed ? "fixed" : ""}`}>
        	<div className="container">
       			<HeaderSite />

				<div className="t-btns">
					<HeaderSocial />
					<HeaderColorMode />
				</div>
    		</div>
		</div>
    </>
  );
};

export default Header;

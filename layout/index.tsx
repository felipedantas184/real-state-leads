import { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<any>(false)

	const toggle = () => {
		setIsOpen(!isOpen);
	}

  return ( 
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer />
    </>
   );
}
 
export default Layout;
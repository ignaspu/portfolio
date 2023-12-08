import { useContext } from "react";
import "./navbar.css";
import { Divide as Hamburger } from "hamburger-react"
import PageContext from "../../context/PageContext";

const NavBar = ({ isOpen, setIsOpen }) => {

  const { darkTheme } = useContext(PageContext)

  return (
    <div style={{backgroundColor: darkTheme ? '#030712' : '#DDC9BC'}}>
      <Hamburger color="#ED7458"
        toggled={isOpen}
        size="40"
        toggle={setIsOpen}
        rounded
      />
    </div>
  );
}

export default NavBar;
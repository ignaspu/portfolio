import { useContext, useState } from "react";
import styled from "styled-components";
import NavBar from "../../navbar/NavBar";
import PageContext from "../../../context/PageContext";
import "./header.css"

const StyledHeader = styled.header`
  background-color: #030712;
  color: white;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const StyledDiv = styled.div`
  font-family: 'Roboto';
  height: 100%;
  margin: 0;
  #theme{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    text-transform: uppercase;
  }
  > ul{
    margin: 0;
    padding: 0;
    > li{
      list-style-type: none;
      padding: 10px;
      padding-left: 20px;
      > a{
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
        font-size: 1.25rem;
      }
    }
  }
  > ul > li:last-child > a{
    color: black;
    font-weight: 500;
    background-color: white;
    padding: 5px 15px;
    border-radius: 10px;
  }
  > ul > li:last-child{
    padding: 20px 0 20px 15px;
    text-align: center;
  }
`;

const Header = () => {

  const { setDarkTheme, darkTheme } = useContext(PageContext)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <StyledHeader
      style={{backgroundColor: darkTheme ? '#030712' : '#DDC9BC'}}
    >
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        <h1 style={{color: darkTheme ? '#ffffff' : '#000000'}}>Solutions</h1>
      </div>
    </StyledHeader>
      {
        isOpen &&
        <StyledDiv
        style={{backgroundColor: darkTheme ? '#111827' : '#FFDC9F'}}
        >
          <ul>
            <li><a style={{color: darkTheme ? '#ffffff' : '#000000'}} href="#apie">Apie mane</a></li>
            <li><a style={{color: darkTheme ? '#ffffff' : '#000000'}} href="#patirtis">Patirtis</a></li>
            <li><a style={{color: darkTheme ? '#ffffff' : '#000000'}} href="#projektai">Projektai</a></li>
            <li><a style={{color: darkTheme ? '#ffffff' : '#000000'}} href="#kontaktai">Kontaktai</a></li>
            <li style={{color: darkTheme ? '#ffffff' : '#000000'}} onClick={() => setDarkTheme(!darkTheme)} id="theme">Pakeisti temą<i class="bi bi-moon-stars"></i></li>
            <li><a style={{color: darkTheme ? '#000000' : '#ffffff', backgroundColor: darkTheme ? '#ffffff' : '#000000'}} href="https://pupelis.com/Ignas-Pupelis.pdf">Atsisiųsti CV</a></li>
          </ul>
        </StyledDiv>
      }
      </>
  );
}

export default Header;
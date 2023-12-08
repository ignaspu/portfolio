import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import PageContext from "../../../context/PageContext";
import { useContext } from "react";

const StyledFooter = styled.footer`
  padding: 15px 10px 0 10px;
  color: white;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  flex-direction: column;
  > h1{
    padding: 5px 25px;
    font-size: 1rem;
    font-weight: 300;
    border-radius: 20px;
  }
  > p{
    font-weight: 300;
    text-align: center;
  }
  .footer{
    width: 100%;
    margin-top: 30px;
    p{
      text-align: center;
    }
  }
  div > span{
    margin: 10px;
  }
`;

const Footer = () => {

  const [phone, setPhone] = useState(' +370 638 38215 ')
  const [email, setEmail] = useState(' pupelis.ignas@gmail.com ')
  const [copied, setCopied] = useState(false)
  const {darkTheme} = useContext(PageContext)

  return (
    <StyledFooter
      id="kontaktai"
      style={{backgroundColor: darkTheme ? '#111827' : '#FFDC9F'}}
    >
      <h1 style={{backgroundColor: darkTheme ? '#1F2937' : '#ED7458'}} >Bendraukime</h1>
      <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>Nedvejodami susisiekite su manimi, jei ieškote kūrėjo, turite pasiūlymą ar tiesiog norite bendradarbiauti.</p>
      <div>
        <i style={{color: darkTheme ? '#ffffff' : '#000000'}} className="bi bi-envelope"></i>
        <span style={{color: darkTheme ? '#ffffff' : '#000000'}}>{email}</span>
        <CopyToClipboard text={email}
          onCopy={() => setCopied({ copied: true })}>
          <i style={{color: darkTheme ? '#ffffff' : '#000000'}} className="bi bi-copy" ></i>
        </CopyToClipboard>
      </div>
      <div>
        <i style={{color: darkTheme ? '#ffffff' : '#000000'}} className="bi bi-telephone"></i>
        <span style={{color: darkTheme ? '#ffffff' : '#000000'}}>{phone}</span>
        <CopyToClipboard text={phone}
          onCopy={() => setCopied({ copied: true })}>
          <i style={{color: darkTheme ? '#ffffff' : '#000000'}} className="bi bi-copy" ></i>
        </CopyToClipboard>
      </div>
      <div style={{backgroundColor: darkTheme ? '#111827' : '#FFDC9F'}} className="footer">
        <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>
          &copy; 2023 | Coded by Ignas
        </p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
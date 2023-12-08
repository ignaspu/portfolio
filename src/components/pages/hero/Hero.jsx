import styled from "styled-components";
import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const StyledHero = styled.section`
  padding: 0 10px 0 10px;
  color: white;
  font-family: 'Roboto';
  > div:first-child{
    display: flex;
    justify-content: center;
  > img{
    width: 150px;
    border: 8px solid #374151;
    padding: 10px 10px 10px 10px;
    border-top: none;
    height: auto;
    margin: 10px;
    }
  }
  > div:last-child{
    padding: 50px 20px;
  > a{
    color: #FFFFFF;
    text-decoration: none;
  }
  > p{
    font-weight: 300;
    line-height: 1.5rem;
  }
  > h1{
    font-weight: 500;
  }
  .bi-github, .bi-linkedin, .bi-whatsapp{
    margin-right: 5px;
    font-size: 1.25rem;
  }
}
@media (min-width: 768px){
  padding: 0 70px;
  display: flex;
  flex-direction: row-reverse;
  > div:first-child > img{
    width: 250px;
  }
  > div:last-child{
    > h1{
      font-size: 2rem;
    }
    > p{
      font-size: 0.9rem;
    }
  }
}
`;

const Hero = () => {

  const { darkTheme } = useContext(PageContext)

  return (
    <StyledHero
      style={{ backgroundColor: darkTheme ? '#030712' : '#DDC9BC' }}
    >
      <div>
        <img style={{ border: darkTheme ? '8px solid #1F2937' : '8px solid #ED7458' }} src="https://i.ibb.co/VQwFCFk/IMG-0413.jpg" alt="" />
      </div>
      <div style={{ color: darkTheme ? '#ffffff' : '#000000' }}>
        <h1>Sveiki, mano vardas Ignas👋</h1>
        <p>
          Aš esu entuziastingas Front End tinklalapių kūrėjas su bakalauro laipsniu komunikacijos ir skaitmeninės rinkodaros srityje. Mano karjera ir išsilavinimas yra orientuotas į aukštą vartotojo patirtį ir efektyvų bendravimą per internetines platformas. Kaip Front End tinklalapių kūrėjas, aš specializuojos kurti modernius, funkcionalius ir estetiškus tinklalapius. Mano darbas apima naudojimąsi HTML, CSS ir JavaScript, siekiant sukurti sklandžią vartotojo sąsają. Aš taip pat esu susipažinęs su populiariais kūrimo įrankiais, bibliotekomis ir karkasais.</p>
        <p><i class="bi bi-geo-alt"></i> Vilnius, Lithuania</p>
        <a href="https://github.com/ignaspu"><i style={{ color: darkTheme ? '#ffffff' : '#000000' }} class="bi bi-github"></i></a>
        <a href="www.linkedin.com/in/ignas-pupelis-8236b9173"><i style={{ color: darkTheme ? '#ffffff' : '#000000' }} class="bi bi-linkedin"></i></a>
        <a href="wa.link/erciwx"><i style={{ color: darkTheme ? '#ffffff' : '#000000' }} class="bi bi-whatsapp"></i></a>
        <p><i style={{ color: darkTheme ? '#ffffff' : '#000000' }} class="bi bi-dot"></i>Atviras naujiems projektams</p>
      </div>
    </StyledHero>
  );
}

export default Hero;
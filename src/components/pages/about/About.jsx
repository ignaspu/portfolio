import styled from "styled-components";
import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const StyledAbout = styled.section`
  padding: 0 10px 0 10px;
  color: white;
  font-family: 'Roboto';
  > div:first-child{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    > h1{
      padding: 5px 25px;
      font-size: 1rem;
      font-weight: 300;
      border-radius: 20px;
    }
  > img{
    width: 150px;
    padding: 10px 10px 10px 10px;
    height: auto;
    margin: 10px;
    }
  }
  > div:last-child{
    padding: 50px 20px;
  > p{
    font-weight: 300;
    line-height: 1.5rem;
  }
  > h1{
    font-weight: 500;
  }
}
@media (min-width: 768px){
  padding: 0 70px;
  display: flex;
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

const About = () => {

  const { darkTheme } = useContext(PageContext)

  return (
    <StyledAbout
      id="apie"
      style={{ backgroundColor: darkTheme ? '#111827' : '#FFDC9F' }}
    >
      <div>
        <h1 style={{ backgroundColor: darkTheme ? '#1F2937' : '#ED7458' }}>Apie mane</h1>
        <img style={{ borderTop: 'none', border: darkTheme ? '8px solid #1F2937' : '8px solid #ED7458' }} src="https://i.ibb.co/SrdB6xW/IMG-5182.jpg" alt="" />
      </div>
      <div>
        <h1 style={{ color: darkTheme ? '#ffffff' : '#000000' }}>Įdomu apie mane? Štai keliatas informacijos:</h1>
        <p style={{ color: darkTheme ? '#ffffff' : '#000000' }}>
          <p>
            Aš esu kūrybingas, pasišventęs detalėms ir siekiu nuolat tobulinti savo įgūdžius. Mano komunikaciniai įgūdžiai ir supratimas apie skaitmeninės rinkodaros principus leidžia man kurti ne tik funkcinius, bet ir strategiškai svarbius tinklalapius, atitinkančius kliento tikslus.
          </p>
          <span style={{ fontWeight: 'bold' }}>Bakalauro laipsnis komunikacijos ir skaitmeninės rinkodaros srityje.</span><br />
          Studijų metu aš gilinausi į komunikacijos strategijas ir skaitmeninės rinkodaros technologijas, įgydamas stiprų teorinį pagrindą ir praktinius įgūdžius, kurie yra esminiai kurdamas efektyvias ir patrauklias interneto svetaines.<br /><br />
          <span style={{ fontWeight: 'bold' }}>CodeAcademy.lt Front-End Bootcamp</span><br />
          Toliau tęsiau studijas pasirinkdamas gilinti programavimo žinias Front-end srityje. Tai padėjo man tapti patikimesniu Front-end kūrėju ir suteikė aiškų pagrindą siekiant karjeros plėtros šioje srityje. Front-end bootcamp ne tik pateikė techninę žinių bazę, bet ir paruošė įveikti realius projektų iššūkius bei bendradarbiauti su komanda. Tai buvo vertinga investicija į mano profesinę ateitį.
        </p>
      </div>
    </StyledAbout>
  );
}

export default About;
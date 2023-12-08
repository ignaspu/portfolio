import styled from "styled-components";

import Skill from "../../UI/skill/Skill";
import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const StyledSkills = styled.section`
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
    border: 8px solid #374151;
    padding: 0px 10px 10px 10px;
    border-top: none;
    height: auto;
    margin: 10px;
    }
  }
  > div:last-child{
    padding: 0 20px 50px 20px;
  > p{
    font-weight: 300;
    line-height: 1.5rem;
    text-align: center;
  }
  > h1{
    font-weight: 500;
  }
  > div{
    > ul{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      padding: 0;
      margin: 0;
    }
    > ul > li{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img{
      width: 50px;
      height: auto;
    }
  }
}
@media (min-width: 768px){
  >div:last-child >div >ul{
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
`;

const Skills = () => {

  const { allSkills, darkTheme } = useContext(PageContext);

  return (
    <StyledSkills
      style={{ backgroundColor: darkTheme ? '#030712' : '#DDC9BC' }}
    >
      <div>
        <h1 style={{ backgroundColor: darkTheme ? '#1F2937' : '#ED7458' }}>Įgūdžiai</h1>
      </div>
      <div>
        <p style={{ color: darkTheme ? '#ffffff' : '#000000' }}>Įgūdžiai ir technologijos, kuriuos išmanau:</p>
        <div>
          <ul>
            {
              allSkills.map(oneSkill => {
                return <Skill
                  key={oneSkill.id}
                  image={oneSkill.image}
                  name={oneSkill.name}
                />
              })
            }
          </ul>
        </div>
      </div>
    </StyledSkills>
  );
}

export default Skills;
import { useContext } from "react";
import styled from "styled-components";
import PageContext from "../../../context/PageContext";
import OneExperience from "../../UI/oneExperience/OneExperience";

const StyledExperience = styled.section`
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
  }
  > p{
    font-weight: 300;
    line-height: 1.5rem;
    text-align: center;
  }
  > div:last-child{
    padding: 0px 20px 50px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > div{
      background-color: #1F2937;
      padding: 10px 20px;
      border-radius: 10px;
      > p{
        font-weight: 300;
      }
      > h1{
        font-size: 1.25rem;
        font-weight: 500;
      }
      > ul > li{
        font-weight: 300;
      }
    }
}
@media (min-width: 768px){
  > div:last-child{
    flex-direction: row;
  }
  >div:last-child >div {
    width: 30%;
    margin: 0 auto;
  }
}
`;

const Experience = () => {

  const { allExperience, darkTheme } = useContext(PageContext);

  return (
    <StyledExperience
    id="patirtis"
    style={{backgroundColor: darkTheme ? '#111827' : '#FFDC9F'}}
    >
      <div>
        <h1 style={{backgroundColor: darkTheme ? '#1F2937' : '#ED7458'}}>Patirtis</h1>
      </div>
      <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>Šiek tiek mano gyvenimiškos patirties: </p>
      <div>
        {
          allExperience.map(exp => {
            return <OneExperience 
              key={exp.id}
              date={exp.date}
              position={exp.position}
              points={exp.points}
            />
          })
        }
      </div>
    </StyledExperience>
  );
}

export default Experience;
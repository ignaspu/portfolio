import { useContext } from "react";
import styled from "styled-components";
import PageContext from "../../../context/PageContext";
import SingleWork from "../../UI/singleWork/SingleWork";

const StyledWork = styled.section`
  padding: 0 10px 0 10px;
  color: white;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
    > h1{
      padding: 5px 25px;
      font-size: 1rem;
      font-weight: 300;
      border-radius: 20px;
    }
  > p{
    font-weight: 300;
    line-height: 1.5rem;
    text-align: center;
  }
  > div{
    padding: 0px 20px 50px 20px;
    display: flex;
    flex-direction: column;
    > div:first-child{
      padding: 10px 20px;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: center;
      > img{
      width: 100%;
      margin: 10px 20px;
      height: auto;
      border-radius: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    }
  }
  > div:last-child{
    background-color: #1F2937;
    border-radius: 0px 0px 10px 10px;
    padding: 10px 20px;
    > h1{
      font-size: 1.25rem;
    }
    > p{
      font-size: 1rem;
    }
    > div{
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      width: 80%;
      margin-bottom: 20px;
      > span{
        background-color: #374151;
        padding: 5px 15px;
        font-size: 0.75rem;
        font-weight: 300;
        border-radius: 20px;
      }
    }
    i{
      font-size: 1.2rem;
    }
  }
}
@media (min-width: 768px){
  > div{
    flex-direction: row;
    width: 80%;
    padding: 0 20px 20px 20px;
  }
  >div >div:first-child{
    border-radius: 10px 0 0 10px;
  }
  >div >div:last-child{
    width: 100%;
    border-radius: 0 10px 10px 0;
  }
  >div >div:first-child >img{
    width: 80%;
  }
}
>div >div:last-child i{
  color: white;
}
>div >div:last-child >p {
  font-size: 0.8rem;
}
`;

const Work = () => {

  const { allWork, darkTheme } = useContext(PageContext)

  return (
    <StyledWork
      id="projektai"
      style={{ backgroundColor: darkTheme ? '#030712' : '#DDC9BC' }}
    >
      <h1 style={{ backgroundColor: darkTheme ? '#1F2937' : '#ED7458' }}>Projektai</h1>
      <p style={{ color: darkTheme ? '#ffffff' : '#000000' }}>Kai kurie verti dėmesio mano sukurti projektai:</p>
      {
        allWork.map(element => {
          return <SingleWork
            key={element.id}
            image={element.image}
            title={element.title}
            description={element.description}
            tools={element.tools}
            url={element.url}
          />
        })
      }
    </StyledWork>
  );
}

export default Work;
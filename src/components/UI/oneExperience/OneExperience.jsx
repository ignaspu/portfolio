import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const OneExperience = ({ date, position, points}) => {

  const { darkTheme } = useContext(PageContext);


  return (
    <div style={{backgroundColor: darkTheme ? '#1F2937' : '#8E7C68'}}>
      <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>{date}</p>
      <h1 style={{color: darkTheme ? '#ffffff' : '#000000'}}>{position}</h1>
      <ul>
        {
          points.map(point => {
            return <li style={{color: darkTheme ? '#ffffff' : '#000000'}}>{point}</li>
          })
        }
      </ul>
    </div>
  );
}

export default OneExperience;
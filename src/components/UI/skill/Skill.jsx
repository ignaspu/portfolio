import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const Skill = ({ image, name }) => {

  const { darkTheme } = useContext(PageContext);


  return (
    <li>
      <img src={image} alt={name} />
      <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>{name}</p>
    </li>
  );
}

export default Skill;
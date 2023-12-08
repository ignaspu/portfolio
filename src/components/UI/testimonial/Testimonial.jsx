import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const Testimonial = ({ description, author, web }) => {

  const {darkTheme} = useContext(PageContext);

  return ( 
    <div style={{backgroundColor: darkTheme ? '#1F2937' : '#8E7C68'}}>
        <i style={{color: darkTheme ? '#ffffff' : '#000000'}} class="bi bi-person-circle"></i>
        <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>"{description}"</p>
        <h1 style={{color: darkTheme ? '#ffffff' : '#000000'}}>{author}</h1>
        <h2 style={{color: darkTheme ? '#ffffff' : '#000000'}}>{web}</h2>
      </div>
   );
}
 
export default Testimonial;
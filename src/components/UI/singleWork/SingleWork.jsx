import PageContext from "../../../context/PageContext";
import { useContext } from "react";

const SingleWork = ({ image, title, description, tools, url }) => {

  const { darkTheme } = useContext(PageContext)

  return (
    <div>
      <div style={{backgroundColor: darkTheme ? '#1F2937' : '#8E7C68'}} >
        <img src={image} alt={title} />
      </div>
      <div style={{backgroundColor: darkTheme ? '#374151' : '#FFDC9F'}} >
        <h1 style={{color: darkTheme ? '#ffffff' : '#000000'}}>{title}</h1>
        <p style={{color: darkTheme ? '#ffffff' : '#000000'}}>{description}</p>
        <div>
          {
            tools.map(el => {
              return <span style={{backgroundColor: darkTheme ? '#1F2937' : '#ED7458'}}>{el}</span>
            })
          }
        </div>
        <a href={url}><i class="bi bi-box-arrow-up-right"/></a>
      </div>
    </div>
  );
}

export default SingleWork;
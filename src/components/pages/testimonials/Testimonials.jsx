import styled from "styled-components";

import Testimonial from "../../UI/testimonial/Testimonial";
import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const StyledTestimonials = styled.section`
  padding: 15px 20px 50px 20px;
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
    line-height: 1.5rem;
    text-align: center;
  }
  > div > div{
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    > i {
      font-size: 3rem;
      color: #9CA3AF;
      margin: 0 auto;
    }
    > p{
      font-weight: 300;
      margin: 0;
    }
    > h1{
      margin: 0 auto;
      font-size: 1.25rem;
    }
    > h2{
      margin: 0 auto;
      font-size: 1rem;
      font-weight: 300;
    }
  }
  .divgrid{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 768px){
    padding: 0 70px 50px 70px;
    .divgrid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      gap: 10px;
    }
  }
`;

const Testimonials = () => {

  const { allTestimonials, darkTheme } = useContext(PageContext)

  return (
    <StyledTestimonials
      id="testimonials"
      style={{ backgroundColor: darkTheme ? '#111827' : '#FFDC9F' }}
    >
      <h1 style={{ backgroundColor: darkTheme ? '#1F2937' : '#ED7458' }}>Testimonials</h1>
      <p style={{ color: darkTheme ? '#ffffff' : '#000000' }}>Nice things people have said about me:</p>
      <div className="divgrid">
        {
          allTestimonials.map(el => {
            return <Testimonial
              key={el.id}
              description={el.description}
              author={el.author}
              web={el.web}
            />
          })
        }
      </div>
    </StyledTestimonials>
  );
}

export default Testimonials;
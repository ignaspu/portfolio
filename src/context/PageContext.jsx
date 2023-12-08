import { createContext, useEffect, useReducer, useState } from "react";

const PageContext = createContext();

const ActionTypes = {
  get_all: 'get all data from db',
  add: 'add one new data',
  remove: 'remove one specific data',
  edit: 'edit one specific data',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.get_all:
      return action.data;
    default:
      return state;
  }
}

const PageProvider = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(true);

  const [allExperience, setAllExperience] = useReducer(reducer, []);
  const [allSkills, setAllSkills] = useReducer(reducer, []);
  const [allWork, setAllWork] = useReducer(reducer, []);
  const [allTestimonials, setAllTestimonials] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/experience`)
      .then(res => res.json())
      .then(data => setAllExperience({
        type: ActionTypes.get_all,
        data: data
      }));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/skills`)
      .then(res => res.json())
      .then(data => setAllSkills({
        type: ActionTypes.get_all,
        data: data
      }));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/work`)
      .then(res => res.json())
      .then(data => setAllWork({
        type: ActionTypes.get_all,
        data: data
      }));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/testimonials`)
      .then(res => res.json())
      .then(data => setAllTestimonials({
        type: ActionTypes.get_all,
        data: data
      }));
  }, []);

  return (
    <PageContext.Provider
      value={{
        allExperience,
        allSkills,
        allWork,
        allTestimonials,
        darkTheme, 
        setDarkTheme
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export { PageProvider };
export default PageContext;
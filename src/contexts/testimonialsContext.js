import { createContext, useState, useEffect } from "react";
import { testimonials } from "../site/site";

const TestimonialsContext = createContext([])

const TestimonialsContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [data, setData] = useState([]);
  
    // fetch a user from a fake backend API
    useEffect(() => {
        setData(testimonials)
    }, []);
  
    return (
      // the Provider gives access to the context to its children
      <TestimonialsContext.Provider value={data}>
        {children}
      </TestimonialsContext.Provider>
    );
  };

  export { TestimonialsContext, TestimonialsContextProvider };
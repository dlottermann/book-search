import React from 'react'
import { useStateValue } from "./../../store";

export const Footer = ({ page, setPage }) => {
    const [state,dispatch] = useStateValue();
  
    const handleNext = page => {
      dispatch({ type: "LOADING", payload: true });
      setPage(page + 10);
    };

    const handlePreview = page => {
        dispatch({ type: "LOADING", payload: true });
        setPage(page - 10);
      };

    return (
        <div>
             <button disabled={page === 0 } onClick={() => handlePreview(page)}>
        Anterior
      </button>
      <button onClick={() => handleNext(page)}>Próxima</button> 
        </div>
    )
}

import React,{Fragment} from "react";
import './main.css'

export const Navbar = ({search}) => {
  return (
    <Fragment>
     
  <div className="search-container">
    <input type="text" id="search-bar" onChange={(e)=>search(e.target.value)} placeholder="Busque livros pelo título, autor ou ISBN;"/>
  </div>
 </Fragment>
 );
};

import React,{Fragment} from "react";
import './main.css'

export const Navbar = ({search}) => {
  return (
    <Fragment>
     
  <div className="search-container">
    <input type="text" id="search-bar" onChange={(e)=>search(e.target.value)} placeholder="Busque livros pelo título, autor ou ISBN;"/>
    <a href="#"><img alt="Buscar" className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </div>
 </Fragment>
 );
};

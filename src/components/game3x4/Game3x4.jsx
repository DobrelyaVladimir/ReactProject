import Cards from "../cards/Cards";
import {useState} from "react";
import { NavLink } from "react-router-dom";

function Game3x4 () {
   const container = 'container3x4'
   const b = 12;
   function reloadPage () {
      window.location.reload();
   }

   return (
      <div>
         <h2>Game 3x4</h2>
         <div className="navigate">
            <button onClick={reloadPage}>Play Again</button>
            <p className="back">
               <NavLink to="/" className={({ isActive }) => isActive ? " actived" : ''}>Back to menu</NavLink>
            </p>
          </div>
         <Cards container={container} b={b}/>
         
      </div>
   )
}
export default Game3x4
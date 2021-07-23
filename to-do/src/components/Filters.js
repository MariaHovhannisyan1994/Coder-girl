import React from "react";
import {  FILTERS} from "../App";
const Filters = ({ setFilter}) => {
  
 
  
  return (
    <div className="radio-input">
      <label>
      <input type="radio" value={ FILTERS.notCompleted} name="filter" onChange={()=>setFilter(FILTERS.notCompleted)}/> To do
     </label>
     <label>
     <input type="radio" value={ FILTERS.all} name="filter" onChange={()=>setFilter(FILTERS.all)}/>All
     </label>
     <label>
       <input type="radio" value={ FILTERS.completed} name="filter" onChange={()=>setFilter(FILTERS.completed)}/> completed
       </label>
    
    </div>
  );
};

export default Filters;
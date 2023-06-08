import React from 'react';
import './TodosError.css';

function TodosError(){

    return(

    
    <div className="TodosError-container">
      <span className="TodosError-completeIcon"></span>
      <p className="TodosError-text">Desesperate, Hubo un error ...</p>
      <span className="TodosError-deleteIcon"></span>
    </div>

    )
}

export { TodosError };
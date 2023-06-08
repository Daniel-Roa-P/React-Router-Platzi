import React from 'react';
import './EmptyTodos.css';

function EmptyTodos(){

    return(

    
    <div className="EmptyTodos-container">
      <span className="EmptyTodos-completeIcon"></span>
      <p className="EmptyTodos-text">Crea tu primer TODO</p>
      <span className="EmptyTodos-deleteIcon"></span>
    </div>

    )
}

export { EmptyTodos };
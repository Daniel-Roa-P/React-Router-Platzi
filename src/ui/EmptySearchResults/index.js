import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults(props){

    return(

    
    <div className="EmptySearchResults-container">
      <span className="EmptySearchResults-completeIcon"></span>
      <p className="EmptySearchResults-text">No se encontraron resultados para {props.searchText}</p>
      <span className="EmptySearchResults-deleteIcon"></span>
    </div>

    )
}

export { EmptySearchResults };
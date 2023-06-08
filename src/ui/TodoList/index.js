import './TodoList.css'
import React from 'react';

function TodoList(props) {

    return(

        <section className='TodoList-container'>
            
            {props.error && props.onError()}

            {(props.loading && !props.error) && props.onLoading()}
            
            {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.error && !props.loading) && props.searchedTodos.map(props.render)}

            <ul>

            {props.children}


            </ul>
        
        </section>

    );

}

export {TodoList};
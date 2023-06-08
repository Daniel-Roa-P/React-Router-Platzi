//import './App.css';
import React from 'react';
import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodosError } from '../../ui/TodosError'
import { TodoHeader } from '../../ui/TodoHeader';
import { EmptySearchResults } from '../../ui/EmptySearchResults'
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();
  
  const { state , stateUpdaters } = useTodos();

  const {

    error,
    loading,
    searchedTodos,    
    totalTodos,
    completedTodos,
    searchValue, 
  
  } = state;

  const {

    deleteTodo,
    setSearchValue,
    sincronizeTodos,
    completeTodo,

  } = stateUpdaters;

  return (

    <React.Fragment>

          <TodoHeader loading = {loading}>

            <TodoCounter
            
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
            
            />
            
            <TodoSearch 
            
            searchValue = {searchValue} 
            setSearchValue = {setSearchValue}

            />

          </TodoHeader>

          <TodoList

            error = {error}
            loading = {loading}
            searchedTodos = {searchedTodos}
            totalTodos = {totalTodos}
            searchText = {searchValue}
            onError = { () => <TodosError/>}
            onLoading = { () => <TodosLoading/>}
            onEmptyTodos = { () => <EmptyTodos/>}
            onEmptySearchResults = { (searchText) => <EmptySearchResults searchText = {searchText}/>}
            render = { todo => (

              <TodoItem 
                
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.id)}
                onEdit={() => {
                  
                  navigate(
                    '/edit/' + todo.id,
                    { state: {todo} }
                    )

                  }
                }
                onDelete = {() => deleteTodo(todo.id)}
              
              />

            )}
          
          />

          <CreateTodoButton
            
              onClick ={ () => navigate('/new') }

          />

          <ChangeAlert
            sincronize = {sincronizeTodos}
          />

    </React.Fragment>

  );

}

export {HomePage};

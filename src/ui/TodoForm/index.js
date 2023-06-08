import React from 'react';
import './TodoForm.css'
import { useNavigate } from 'react-router-dom';

function TodoForm(props){

    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onChange = (event) => {

       setNewTodoValue(event.target.value);

    }

    const onCancel = () => {

        navigate('/');

    }

    const onSubmit = (event) => {

        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');

    }


    return(

        <form onSubmit={onSubmit}>

            <label> { props.label } </label>
            <textarea

                value={newTodoValue}
                placeholder='Cortar una cebolla para el almuerzo'
                onChange={onChange}

            />

            <div className='TodoForm-buttonContainer'>

                <button 
                onClick={onCancel}
                className = 'TodoForm-button TodoForm-button-cancel'
                type="button">

                    Cancelar

                </button>

                <button
                type="submit"
                className = 'TodoForm-button TodoForm-button-add'>


                    {props.submitText}

                </button>

            </div>

        </form>

    );

}

export {TodoForm};
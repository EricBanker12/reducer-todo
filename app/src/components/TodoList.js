import React from 'react'

import {reducer, initialState} from '../reducers/reducer'

import Todo from './Todo'
import AddTodoForm from './AddTodoForm';
import ClearCompleted from './ClearCompleted'

function TodoList(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <section>
            <h1>To Do List</h1>
            <ClearCompleted dispatch={dispatch} />
            {state.map(todo => <Todo key={todo.id} {...todo} dispatch={dispatch} />)}
            <AddTodoForm dispatch={dispatch} />
        </section>
    )
}

export default TodoList
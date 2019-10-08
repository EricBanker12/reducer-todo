import React from 'react'

import {reducer, initialState} from '../reducers/reducer'

import Todo from './Todo'

function TodoList(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <section>
            <h1>Hello World</h1>
            {state.map(todo => <Todo key={todo.id} {...todo} />)}
        </section>
    )
}

export default TodoList
import React from 'react'
import {Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core'

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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            To Do
                        </TableCell>
                        <TableCell>
                            Due Date
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map(todo => <Todo key={todo.id} {...todo} dispatch={dispatch} />)}
                </TableBody>
            </Table>
            <AddTodoForm dispatch={dispatch} />
        </section>
    )
}

export default TodoList
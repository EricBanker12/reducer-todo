import React from 'react'
import  { Button, Input } from '@material-ui/core'

function AddTodoForm({dispatch}) {
    const [item, setItem] = React.useState('')
    const [dueDate, setDueDate] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            payload: {
                item,
                dueDate: dueDate ? new Date(Date.parse(dueDate)) : '',
                completed: false,
                id: Date.now(),
            }
        })
        setItem('')
        setDueDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                type='text'
                placeholder='Add a new task'
                required
                value={item}
                onChange={e => setItem(e.target.value)}
            />
            <Input
                type='date'
                placeholder='Due date (optional)'
                style={{marginLeft: '1rem'}}
                value={dueDate}
                onChange={e => {console.log(e.target.value); setDueDate(e.target.value)}}
            />
            <Button
                type='submit'
                color='primary'
                variant='contained'
                style={{marginLeft: '1rem'}}
            >
                Add
            </Button>
        </form>
    )
}

export default AddTodoForm
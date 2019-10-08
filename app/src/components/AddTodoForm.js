import React from 'react'
import  { Button, Input } from '@material-ui/core'

function AddTodoForm({dispatch}) {
    const [item, setItem] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            payload: {
                item,
                completed: false,
                id: Date.now(),
            }
        })
        setItem('')
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
                // value={item}
                // onChange={e => setItem(e.target.value)}
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
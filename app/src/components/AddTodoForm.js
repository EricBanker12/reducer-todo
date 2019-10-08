import React from 'react'

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
            <input
                type='text'
                placeholder='add a new task'
                value={item}
                onChange={e => setItem(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm
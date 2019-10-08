import React from 'react'

function Todo({item, completed, id, dispatch}) {
    return (
        <div>
            <p
                style={{
                    cursor: 'pointer',
                    textDecoration: completed?'line-through':'unset',
                    color: completed?'red':'unset',
                }}
                onClick={()=>{dispatch({type:'TOGGLE_COMPLETED', payload: id})}}
            >
                {item}
            </p>
        </div>
    )
}

export default Todo
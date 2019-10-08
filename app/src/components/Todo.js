import React from 'react'
import {TableRow, TableCell} from '@material-ui/core'

function Todo({item, completed, id, dispatch}) {
    return (
        <TableRow>
            <TableCell
                style={{
                    cursor: 'pointer',
                    textDecoration: completed?'line-through':'unset',
                    color: completed?'red':'unset',
                }}
                onClick={()=>{dispatch({type:'TOGGLE_COMPLETED', payload: id})}}
            >
                {item}
            </TableCell>
        </TableRow>
    )
}

export default Todo
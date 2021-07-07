import React from 'react'
import  { Button } from '@material-ui/core'

function ClearCompleted({dispatch}) {
    return (
        <Button
            color='secondary'
            variant='contained'
            onClick={()=>{dispatch({type: 'CLEAR_COMPLETED'})}}
        >
            Clear Completed Tasks
        </Button>
    )
}

export default ClearCompleted
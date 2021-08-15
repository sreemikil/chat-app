import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <Button style={{ backgroundColor: '#312552' , color: '#ffffff'}}
        onClick={() => auth.signOut()}>
            Sign Out
        </Button>
    )
}

export default SignOut
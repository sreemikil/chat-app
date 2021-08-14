import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="signin">
            <Button style={{ height: '24px' ,padding: '30px',fontSize: '16px', borderRadius: '50px', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn
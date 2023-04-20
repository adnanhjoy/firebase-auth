import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init'
import { useState } from 'react'

const auth = getAuth(app) 

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider
  const githubProvider = new GithubAuthProvider

  const googelBtn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user
      setUser(user)
    })
    
    .catch(error => {
      console.log(error)
    })
  }

  const googleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  }

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user
      setUser(user)
    })
  }

  const githubSignOut = () => {

  }

  return (
    <div className="App">
      { user.uid ?
        <>
          <button onClick={googleSignOut}>Sign out</button>
        </> :
        <>
          <button onClick={googelBtn}>Sign in</button>
          <button onClick={githubSignIn}>Github sign</button>
        </>
      }

      {user.uid && <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
      </div>}
    </div>
  )
}

export default App

import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase'
import { useState } from 'react'

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider()

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUser(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setUser({})
      })
  }

const githubSignIn = () => {
  signInWithPopup(auth, githubProvider)
  .then(result => {
    const user = result.user
    setUser(user)
  })
  .catch(error => {
    console.error(error)
  })
}

const twitterSignIn = () => {
  signInWithPopup(auth, twitterProvider)
  .then((result) => {
    const user = result.user;
    setUser(user)
  })
  .catch(error => {
    console.error(error)
  })
}

  return (
    <div className="App">

      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
          <button onClick={googleSignIn}>Google</button>
          <button onClick={githubSignIn}>Github</button>
          <button onClick={twitterSignIn}>Twitter</button>
        </>
      }



      { user.uid && <div>
        <h1>{user.displayName}</h1>
        <p>{user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}

    </div>
  )
}

export default App

import React from 'react'
import "./registration.css"

import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = async (e) => {
    e.preventDefault()

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      console.log(user)
      console.log("Successfully logged in")
      navigate("/message")

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section className='container'>
      <div className="screen">
        <div class="screen__content">
          {
            <form className='login' onSubmit={signIn}>
              <div className='login__field'>

                <input class="login__input" type="email" placeholder='Enter you email' onChange={(e) => setEmail(e.target.value)} value={email} />


                <input class="login__input" type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />

                <button className='button login__submit' type='submit'><span class="button__text">Login</span></button>

                <p>Don't have an account? <br />
                  <Link className='link' to='/signup'>Create an account</Link>
                </p>
              </div>

            </form>
          }
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </section>
  )
}

export default Login

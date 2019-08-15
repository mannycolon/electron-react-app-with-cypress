import React, { useState } from 'react';

export default function App() {
  const [isLoginOpened, openLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      {isLoginOpened ?
        <form
          method="post"
          onSubmit={async e => {
            e.preventDefault()
            alert(`You're logged in as ${email}`)
          }}
        >
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Sign In!</button>
        </form>
      :
        <button
          id="go-to-login"
          onClick={() => openLogin(true)}
        >
          Go to Login
        </button>
      }
    </div>
  );
}

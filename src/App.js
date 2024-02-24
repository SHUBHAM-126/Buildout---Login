import { useState } from 'react'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [IsLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username == "user" && password == "password") {
      setIsLoggedIn(true)
      setError('')
    }
    else {
      setError('Invalid username or password')
    }

  }

  return (
    <div>
      <h1>Login Page</h1>

      {error && <p>{error}</p>}

      {!IsLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input name='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' required />
          <br />
          <label htmlFor='password'>Password:</label>
          <input name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {IsLoggedIn && <p>Welcome, user!</p>}
    </div>
  );
}

export default App;

// pages/login.js
import { useState } from 'react';
import { useAuth } from '../useAuth';
import { useRouter } from 'next/router';
import "@/styles/login.module.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await login({ email, password });
      router.push('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return <p>Logged in!</p>;
  }

  return (
<>
    <div className="background">
    <div className="shape"><img 
    src={'https://cdn.brandfetch.io/ethereum.org/w/400/h/400'}
    
    style={{
      width: '250px',
      height: '250px',
      borderRadius: '50%'

       }}/>
       </div>
    <div className="shape"><img 
  src={'https://cdn.brandfetch.io/bitcoin.org/w/400/h/400'}
 
  style={{ 
    width: '250px', 
    height: '250px', 
    borderRadius: '50%' 
  }} 
/>
</div>
  </div>
        <form className="form" onSubmit={handleSubmit}>
          <h3>Login Information</h3>
          <label htmlFor="username">Username</label>
          <input
          id='username'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
          id='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="loginButton" type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
        </>
  );
};

export default LoginPage;


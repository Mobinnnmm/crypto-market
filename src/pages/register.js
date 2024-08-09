import { useState } from 'react';
import { useAuth } from '../useAuth';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import "@/styles/login.module.css";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, isAuthenticated } = useAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setError(null);
      await register({ email, password });

      // EmailJS send email
      sendEmail(email);

      router.push('/');
    } catch (err) {
      setError('Error during registration');
    }
  };

  const sendEmail = (userEmail) => {
    const templateParams = {
      to_name: userEmail, // This should match the variable name in your template
      from_name: 'Web422', 
      message: 'Thank you for registering with our service!'
    };
  
    emailjs.send('service_ufnr7gs', 'template_sty3ogm', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };
  

  if (isAuthenticated) {
    return <p>Registered successfully!</p>;
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
        <h3>Register Information</h3>
        <input
          id='username'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          id='password1'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          id='password2'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="loginButton" type="submit">Register</button>
        {error && <p>{error}</p>}
        <div>
          <a href="/login"><p>Already have an account? Log in</p></a>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;

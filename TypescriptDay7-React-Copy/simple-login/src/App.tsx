// App.tsx
import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

interface WelcomeProps {
  username: string;
  onLogout: () => void;
}

class Welcome extends React.Component<WelcomeProps> {
  render() {
    return (
      <Card>
        <h2>Welcome, {this.props.username}!</h2>
        <button onClick={this.props.onLogout}>Log Out</button>
      </Card>
    );
  }
}

function App() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showVerification, setShowVerification] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [expectedCode, setExpectedCode] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const VALID_USERNAME = 'sarah';
  const VALID_PASSWORD = '123';
  const REGISTERED_EMAIL = 'minhafatima94@gmail.com';

  const handleLogin = async () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      try {
        const response = await fetch('http://localhost:5000/send-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: REGISTERED_EMAIL }),
        });

        const data = await response.json();
        if (response.ok) {
          setExpectedCode(data.code); // Save expected code for later comparison
          setShowVerification(true);
          setMessage(`Verification code sent to ${REGISTERED_EMAIL}`);
        } else {
          setMessage('Failed to send verification code');
        }
      } catch (error) {
        console.error('Error sending verification code:', error);
        setMessage('Server error. Please try again.');
      }
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleVerify = () => {
    if (verificationCode === expectedCode) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert('Incorrect verification code.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setVerificationCode('');
    setShowVerification(false);
    setMessage('');
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const storedUser = localStorage.getItem('username');
    if (loggedIn === 'true' && storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <Card>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>

          {showVerification && (
            <>
              <p style={{ color: 'green' }}>{message}</p>
              <input
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <br />
              <button onClick={handleVerify}>Verify</button>
            </>
          )}
        </Card>
      ) : (
        <Welcome username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

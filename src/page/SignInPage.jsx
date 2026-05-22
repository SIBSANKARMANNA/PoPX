import { useState } from 'react';
import { usePopX } from '../context/PopContext';



const SignInPage = () => {
  const { setCurrentPage, login } = usePopX();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    if (login(email, password)) {
      setCurrentPage('settings');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card signin-card">
        <h2>Signin to your<br />PopX account</h2>
        <p className="signin-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <label htmlFor="signin-email">Email Address</label>
            <input
              type="email"
              id="signin-email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> */}
          <fieldset className="form-group">
              <legend>Email Address</legend>
              <input
                  type="email"
                  id="signin-email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </fieldset>

          {/* <div className="form-group">
            <label htmlFor="signin-password">Password</label>
            <input
              type="password"
              id="signin-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}

          <fieldset className="form-group">
              <legend>Password</legend>
              <input
                  type="password"
                  id="signin-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </fieldset>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-signin btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

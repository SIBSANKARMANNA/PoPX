import { useState } from 'react';
import { usePopX } from '../context/PopContext';
// import "./SignUpPage.css";

const SignUpPage = () => {
  const { setCurrentPage, createAccount, login } = usePopX();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    const newAccount = createAccount(formData);
    login(newAccount.email, newAccount.password);
    setCurrentPage('settings');
  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">
        <h2>Create your<br />PopX account</h2>

        <form onSubmit={handleSubmit}>
          <fieldset className="form-group">

              <legend>
                  Full Name
                  <span className="required">*</span>
              </legend>

              <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Marry Doe"
                  value={formData.fullName}
                  onChange={handleChange}
              />

          </fieldset>

          <fieldset className="form-group">

              <legend>
                  Phone Number
                  <span className="required">*</span>
              </legend>

              <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Marry Doe"
                  value={formData.phone}
                  onChange={handleChange}
              />

          </fieldset>

          <fieldset className="form-group">

              <legend>
                  Email Address
                  <span className="required">*</span>
              </legend>

              <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Marry Doe"
                  value={formData.email}
                  onChange={handleChange}
              />

          </fieldset>

          <fieldset className="form-group">

              <legend>
                  Password
                  <span className="required">*</span>
              </legend>

              <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Marry Doe"
                  value={formData.password}
                  onChange={handleChange}
              />

          </fieldset>

          <fieldset className="form-group">

              <legend>
                  Company Name
              </legend>

              <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Marry Doe"
                  value={formData.company}
                  onChange={handleChange}
              />

          </fieldset>

          <div className="form-group radio-group">
            <label>Are you an Agency?<span className="required">*</span></label>
            <div className="radio-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>No</span>
              </label>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" style={{position: "relative", top: "160px"}} className="btn btn-primary btn-block">
            Create Account
          </button>
        </form>

        {/* <p className="login-link">
          Already have an account?{' '}
          <button
            onClick={() => setCurrentPage('signin')}
            className="link-button"
          >
            Login
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default SignUpPage;
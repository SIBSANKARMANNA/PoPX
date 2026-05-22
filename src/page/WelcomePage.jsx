import { usePopX } from "../context/PopContext";
// import "./WelcomePage.css";

const WelcomePage = () => {
  const { setCurrentPage } = usePopX();

  return (
    <div className="auth-container">
      <div className="auth-card welcome-card">
        <div className="welcome-header">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage('signup')}
          >
            Create Account
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCurrentPage('signin')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
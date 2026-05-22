import { usePopX } from '../context/PopContext';
import WelcomePage from './WelcomePage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import AccountSettingsPage from './AccountSettingsPage';
// import "./PoPXApp.css";

const PopXApp = () => {
  const { currentPage } = usePopX();

  return (
    <div className="app-wrapper">
      {currentPage === 'welcome' && <WelcomePage />}
      {currentPage === 'signup' && <SignUpPage />}
      {currentPage === 'signin' && <SignInPage />}
      {currentPage === 'settings' && <AccountSettingsPage />}
    </div>
  );
};






export default PopXApp;
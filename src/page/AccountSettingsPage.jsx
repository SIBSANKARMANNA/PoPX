import { usePopX } from '../context/PopContext';


const AccountSettingsPage = () => {
  const { currentUser } = usePopX();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="auth-container">
      <div className="auth-card settings-card" >
        <div className="settings-header">
          <p>Account Settings</p>
        </div>

        <div className="user-profile">
          <div className="profile-image">
            <img src={currentUser.image} alt={currentUser.fullName} />
            <div className="agency-badge">P</div>
          </div>
          <div className="profile-info">
            <h3>{currentUser.fullName}</h3>
            <p>{currentUser.email}</p>
          </div>
        </div>

        <div className="user-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

      </div>
    </div>
  );
};


export default AccountSettingsPage;
import React from 'react';
import PropTypes from 'prop-types';

// Higher-Order Component (HOC)
function withAuth(WrappedComponent) {
  function AuthComponent(props) {
    // Simulate fetching user data 
    const user = {
      name: "John Doe",
      isAuthenticated: true,
    };

    // Render the WrappedComponent with the injected 'user' prop
    return <WrappedComponent {...props} user={user} />;
  }

  // Set a more descriptive display name for debugging
  AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
}

// Component that will be wrapped by the HOC
function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Status: {user?.isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
    </div>
  );
}

// PropTypes for better debugging and validation
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }),
};

// Apply the HOC to the UserProfile component
const AuthenticatedUserProfile = withAuth(UserProfile);

// Usage in your application
function App() {
  return (
    <div className="App">
      <AuthenticatedUserProfile />
    </div>
  );
}

export default App;

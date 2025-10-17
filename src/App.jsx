import { useAsgardeo } from '@asgardeo/react';
import './App.css'

const AuthenticatedApp = () => {
  const {
    isSignedIn,
    user,
    signIn,
    signOut,
  } = useAsgardeo();

  return (
    <div>
      {isSignedIn && user ? (
        <>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default AuthenticatedApp;

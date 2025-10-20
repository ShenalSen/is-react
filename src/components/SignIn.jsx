import React from 'react';
import { SignInButton } from '@asgardeo/react';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Please sign in to access protected content.</p>
      <SignInButton>Sign In with Asgardeo</SignInButton>
    </div>
  );
};

export default SignIn;
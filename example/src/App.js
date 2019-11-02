import React from 'react';
import AppleLogin from 'react-apple-login';

const App = () => {
  return (
    <div>
      <AppleLogin clientId="com.react.apple.login" scope="name email" redirectURI="https://redirectUrl.com" state="" />
    </div>
  )
}

export default App;

import React from 'react';
import AppleLogin from 'react-apple-login';

const App = () => {
  return (
    <div>
      <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
    </div>
  )
}

export default App;

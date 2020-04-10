# react-apple-login

> A Apple Log-in Component for React

[![NPM](https://img.shields.io/npm/v/react-apple-login.svg)](https://www.npmjs.com/package/react-apple-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

See [react-apple-login](https://react-apple-login.cloudmonastery.com/) for live demo.

## Install

```bash
npm install --save react-apple-login
```


## Usage

```tsx
import * as React from 'react'

import AppleLogin from 'react-apple-login'

class Example extends React.Component {
  render () {
    return (
      <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
    )
  }
}
```


## Login Props

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    clientId  |  string  |               REQUIRED               | The developer’s client identifier, as provided by WWDR. |
|    scope     |  string  |                  -                   |     The amount of user information requested from Apple. Valid values are name and email. You can request one, both, or none.             |
| redirectURI |  string  |                   REQUIRED                  | The URI to which the authorization redirects. |
| responseType |  string  |                   code                  | The type of response requested. Valid values are code and id_token. You can request one or both. When requesting an id_token response type, response_mode must be either fragment or form_post. |
| responseMode |  string  |                   query                  | The type of response mode expected. Valid values are query, fragment, and form_post. If you requested any scopes, the value must be form_post. |
|     state    |  string  |             -            |         The current state of the request.         |
|     nonce    |  string  |             -            |         A String value used to associate a client session with an ID token. This value is also used to mitigate replay attacks.         |
|     designProp.height    |  number  |             30            |        The height of the button image. The minimum and maximum values are 30 and 64, respectively         |
|     designProp.width    |  number  |             140            |        The width of the button image. The minimum and maximum values are 130 and 375, respectively.       |
|     designProp.color    |  string  |             black            |        The background color for the button image. The possible values are white and black (the default).         |
|     designProp.border    |  boolean  |             false            |        A Boolean value that determines whether the button image has a border.          |
|     designProp.type    |  string  |             sign-in            |        The type of button image returned. The possible values are sign-in (the default) and continue.        |
|     designProp.border_radius    |  number  |             15            |        The corner radius for the button image. The minimum and maximum values are 0 and 50, respectively.        |
|     designProp.scale    |  number  |             1            |        The scale of the button image. The minimum and maximum values are 1 and 6, respectively.       |
|     designProp.locale    |  string  |             en_US            |        The language used for text on the button.     |
|     render    |  function  |             -            |        Render prop to use a custom element, use renderProps.onClick   |
|     callback    |  function  |             -            |      callback only work with Response Mode query.   |


## Production Bundle

```
npm run prepare
```


## License

MIT © [Mayank Patel](https://github.com/patelmayankce)

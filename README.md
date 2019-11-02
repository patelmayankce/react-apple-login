# react-apple-login

> A Apple Log-in Component for React

[![NPM](https://img.shields.io/npm/v/react-apple-login.svg)](https://www.npmjs.com/package/react-apple-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
      <AppleLogin clientId="com.react.apple.login" scope="name email" redirectURI="https://redirectUrl.com" state="" />
    )
  }
}
```

## Login Props

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    clientId  |  string  |               REQUIRED               | You can create a clientID from Apple Developer console |
|    scope     |  string  |                   name email                  |                  |
| redirectURI |  string  |                   REQUIRED                  |  |
|     state    |  string  |             -            |                  |
|     dataColor    |  string  |             black            |                  |
|     dataBorder    |  boolean/string  |             false            |                  |
|     dataType    |  string(sign in/continue)  |             sign in            |                  |
|     className    |  string  |             -            |                  |

## Production Bundle
```
npm run prepare
```


## License

MIT © [Mayank Patel](https://github.com/patelmayankce)

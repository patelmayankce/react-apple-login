import './index.css';

import React, { useState } from 'react';
import AppleLogin from 'react-apple-login';

import { LOCALES } from './Constants.js';

const App = () => {
  const [settings, setSettings] = useState({
    clientId: 'com.react.apple.login',
    redirectURI: 'https://redirectUrl.com',
    scope: 'name email',
    state: '',
    responseType: 'code',
    responseMode: 'query',
    nonce: '',
    designProp: {
      height: 30,
      width: 140,
      color: 'black',
      border: false,
      type: 'sign-in',
      border_radius: 15,
      scale: 1,
      locale: 'en_US',
    }
  });

  const RenderElementByLoop = (start, end) => {
    let options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i}>{i}</option>)
    }
    return options;
  }

  const changeSettings = (key, e, isDesignSetting) => {
    if (isDesignSetting) {
      setSettings({
        ...settings, designProp: {
          ...settings.designProp,
          [key]: e.target.value
        }
      });
    } else {
      setSettings({ ...settings, [key]: e.target.value });
    }
  }

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <h2>React Apple Login</h2>
        </div>
      </header>
      <div className="page-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="render-container flex50 d-flex align-items-center justify-content-center">
            <AppleLogin {...settings} />
          </div>
          <div className="config-container flex50">
            <div className="title-container d-flex align-items-center justify-content-between">
              <div className="flex50">
                <h3>Settings</h3>
                <p>You can change settings as per your need.</p>
              </div>
              <div className="flex50">
                <h3>Design Settings</h3>
                <p>You can design button as per your need.</p>
              </div>
            </div>
            <div className="settings-container d-flex justify-content-between">
              <div className="flex50">
                <div className="form-group">
                  <label>Client ID</label>
                  <input type="text" className="form-control" name="clientId" placeholder="Enter Client ID" value={settings.clientId} onChange={(e) => changeSettings('clientId', e)} />
                </div>
                <div className="form-group">
                  <label>Redirect URI</label>
                  <input type="text" className="form-control" name="redirectURI" placeholder="Enter Redirect URI" value={settings.redirectURI} onChange={(e) => changeSettings('redirectURI', e)} />
                </div>
                <div className="form-group">
                  <label>Scope</label>
                  <input type="text" className="form-control" name="scope" placeholder="Enter Scope" value={settings.scope} onChange={(e) => changeSettings('scope', e)} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" className="form-control" name="state" placeholder="Enter State" value={settings.state} onChange={(e) => changeSettings('state', e)} />
                </div>
                <div className="form-group">
                  <label>Response Type</label>
                  <select className="form-control" name="responseType" value={settings.responseType} onChange={(e) => changeSettings('responseType', e)}>
                    <option>code</option>
                    <option>id_token</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Response Mode</label>
                  <select className="form-control" name="responseMode" value={settings.responseMode} onChange={(e) => changeSettings('responseMode', e)}>
                    <option>query</option>
                    <option>fragment</option>
                    <option>form_post</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Nonce</label>
                  <input type="text" className="form-control" name="nonce" placeholder="Enter Nonce" value={settings.nonce} onChange={(e) => changeSettings('nonce', e)} />
                </div>
              </div>
              <div className="flex50">
                <div className="form-group">
                  <label>Height</label>
                  <input type="number" className="form-control" name="height" placeholder="Enter Height" min="30" max="64" value={settings.designProp.height} onChange={(e) => changeSettings('height', e, true)} />
                </div>
                <div className="form-group">
                  <label>Width</label>
                  <input type="number" className="form-control" name="Width" placeholder="Enter Width" min="130" max="375" value={settings.designProp.width} onChange={(e) => changeSettings('width', e, true)} />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <select className="form-control" name="color" value={settings.designProp.color} onChange={(e) => changeSettings('color', e, true)}>
                    <option>white</option>
                    <option>black</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Border</label>
                  <select className="form-control" name="border" value={settings.designProp.border} onChange={(e) => changeSettings('border', e, true)}>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" value={settings.designProp.type} onChange={(e) => changeSettings('type', e, true)}>
                    <option>sign-in</option>
                    <option>continue</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Border Radius</label>
                  <select className="form-control" name="border_radius" value={settings.designProp.border_radius} onChange={(e) => changeSettings('border_radius', e, true)}>
                    {RenderElementByLoop(0, 50)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Scale</label>
                  <select className="form-control" name="scale" value={settings.designProp.scale} onChange={(e) => changeSettings('scale', e, true)}>
                    {RenderElementByLoop(1, 6)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Locale</label>
                  <select className="form-control" name="locale" value={settings.designProp.locale} onChange={(e) => changeSettings('locale', e, true)}>
                    {LOCALES && LOCALES.length > 0 &&
                      LOCALES.map((value, index) => {
                        return <option key={index}>{value}</option>
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="copyright">By CloudMonastery Copyright © {(new Date().getFullYear())}.</p>
      </footer>
    </div>
  )
}

export default App;

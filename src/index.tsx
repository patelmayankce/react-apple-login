import React, { useEffect } from 'react';

import useScript from './useScript';

export interface AppleLoginProps {
  clientId: string;
  scope?: string;
  redirectURI: string;
  state?: string;
  dataColor?: string | 'white' | 'black';
  dataBorder?: boolean | string | 'true' | 'false';
  dataType?: string | 'sign in' | 'continue';
  className?: string;
}

declare const window: any | Window;

const AppleLogin = (props: AppleLoginProps) => {
  const { className = '', clientId, redirectURI, scope = 'name email', state = '', dataBorder = true, dataColor = 'white', dataType = 'sign in' } = props;
  const [loaded] = useScript(
    'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
  );

  useEffect(() => {
    if (loaded) {
      try {
        if (window && window.AppleID && window.AppleID.auth) {
          window.AppleID.auth.init({
            clientId,
            scope,
            redirectURI,
            state,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    return () => { };
  }, [loaded]);

  return (
    <>
      <div className={className} id="appleid-signin" data-color={dataColor} data-border={dataBorder.toString()} data-type={dataType} />
    </>
  );
};

export default AppleLogin

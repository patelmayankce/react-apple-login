import React, { useEffect }  from 'react';

// import useScript from './useScript';

export interface AppleLoginProps {
  clientId: string;
  scope: string;
  redirectURI: string;
  state?: string;
}

// declare const window: any | Window;

const AppleLogin = (/**props: AppleLoginProps */) => {
  // const { clientId, redirectURI, scope, state = '' } = props;
  // const [loaded] = useScript(
  //   'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
  // );

  useEffect(() => {
  //   if (loaded) {
  //     try {
  //       if (window && window.AppleID && window.AppleID.auth) {
  //         window.AppleID.auth.init({
  //           clientId,
  //           scope,
  //           redirectURI,
  //           state,
  //         });
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
    return () => { };
  }, [/**loaded*/]);

  return (
    <>
      <div id="appleid-signin" data-color="white" data-border="true" data-type="sign in" />
    </>
  );
};

export default AppleLogin

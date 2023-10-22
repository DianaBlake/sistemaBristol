import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="526540264867-ctnsa58dkn2m158qo0rvth36gc3bvbsn.apps.googleusercontent.com"/>


class Google extends React.Component {
    responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj);
    };
  
    render() {
      return (
        <div>
          <GoogleLogin
            clientId="526540264867-ctnsa58dkn2m158qo0rvth36gc3bvbsn.apps.googleusercontent.com"
            buttonText="Iniciar sesión con Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      );
    }
  }
  
  export default Google;

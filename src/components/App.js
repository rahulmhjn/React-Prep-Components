import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../utilityComponents/BackButton/BackButton';

function App() {
  const [profilePic, setProfilePic] = useState('');
  const [count, setCount] = useState(0);

  console.log('render ', count);

  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/auth/google',
      data: { tokenId: response.tokenId },
    })
      .then((res) => {
        console.log(res);
        setProfilePic(res.data.profilePictureURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const responseErrorGoogle = (error) => {
    console.log(error);
  };

  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/auth/facebook',
      data: { accessToken: response.accessToken, userID: response.userID },
    })
      .then((res) => {
        console.log(res);
        setProfilePic(res.data.profilePictureURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        clientId:
          '543979123552-b7qmjtp5erb0cfqqo084sflfta4lek70.apps.googleusercontent.com',
      });
    });
  }, []);

  return (
    <>
      <BackButton />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <GoogleLogin
          clientId="543979123552-b7qmjtp5erb0cfqqo084sflfta4lek70.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId="850015219980629"
          autoLoad={false}
          callback={responseFacebook}
        />
        {profilePic && (
          <img src={profilePic} width="50px" height="50px" alt="profile pic" />
        )}
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count 0</button>
        <button onClick={() => setCount(5)}>Count 5</button>
      </div>
    </>
  );
}

export default App;

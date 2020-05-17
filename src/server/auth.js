import {auth, googleProvider} from "./fb"

const googleLogin = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(function(result) {
      let token = result.credential.accessToken;
      let user = result.user;
      console.log(user.emailVerified);
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
};

export default googleLogin

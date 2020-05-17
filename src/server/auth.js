import { auth, googleProvider } from "./fb";

const googleLogin = callback => {
  return auth
    .signInWithPopup(googleProvider)
    .then(function(result) {
      let token = result.credential.accessToken;
      let user = result.user;
      console.log(user.emailVerified);
      return { name: user.displayName, loginState: user.emailVerified };
    })
    .then(res => {
      callback(res);
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
};

export default googleLogin;

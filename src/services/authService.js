import axios from "axios";

export const postLoginData = (userDetail) =>
  axios.post(`api/auth/login`, JSON.stringify(userDetail));

export const postSignupData = (userDetail) =>
  axios.post("/api/auth/signup", JSON.stringify(userDetail));

export const postUserVerify = (encodedToken) => 
  axios.post("/api/auth/verify", {
    encodedToken: encodedToken,
  });



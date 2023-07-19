import React, { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Fim/firebase";
import GoogleButton from "react-google-button";
export default function Login2({
  data,
  setLoading,
  setData,
  loading,
}) {
   useEffect(() => {
     setData(JSON.parse(localStorage.getItem("userLogin")));

     // eslint-disable-next-line
   }, [loading]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setData(currentUser);
      localStorage.setItem("userLogin", JSON.stringify(currentUser));
   
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  const handleSignOut = () => {
    signOut(auth);

  };

  return (
    <div>
      {data ? (
        <div
          style={{
            display: "flex",
            width: 150,
            alignItems: "center",
          }}
        >
          <Link
            to="#"
            onClick={() => {
              localStorage.removeItem("userLogin");
              setLoading(false);
              handleSignOut();
              window.location.href = "/";
            }}
          >
            LOGOUT
          </Link>

          <img
            src={data.photoURL}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            alt="1"
          />
         
        </div>
      ) : (
        <GoogleButton
          onClick={() => {
            googleSignIn();
          }}
        />
      )}
    </div>
  );
}

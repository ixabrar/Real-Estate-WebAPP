// React Imports
import React from "react";
// React Icons
import { FaGoogle } from "react-icons/fa";
// MUI Imports
import { Button } from "@mui/material";
// Custom Imports
import DotLoader from "../Spinner/dotLoader";

const GoogleOAuth = () => {
  const googleHandler = async () => {
    // Note: Firebase-free Google OAuth implementation needed here
    // For now, you can integrate Google Sign-In library directly
    alert("Google OAuth is currently disabled. Please use email/password login.");
    // TODO: Implement Google OAuth using @react-oauth/google or similar library
  };

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        disabled={true}
        sx={{
          padding: "5px 30px",
          textTransform: "capitalize",
          margin: "5px 0 20px 0",
          background: "#de4a39",
          height: "40px",
          color: "#fff",
          lineHeight: "0",
          "&:hover": {
            background: "#de4a39",
          },
        }}
        startIcon={<FaGoogle style={{ fontSize: "15px" }} />}
        onClick={googleHandler}
      >
        <DotLoader color="#fff" size={12} />
      </Button>
    </>
  );
};

export default GoogleOAuth;

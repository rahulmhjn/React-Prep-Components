import React from "react";
import { useNavigate } from "react-router";

const BackButton = ({ position = "relative" }) => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        position: position,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "70px",
        backgroundColor: "grey",
        cursor: "pointer",
        marginTop: 0,
        marginLeft: 0,
        borderRadius: "5px",
      }}
      onClick={backButton}
    >
      {"> Back"}
    </div>
  );
};

export default BackButton;

import React from "react";
import "./Error404.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="error_404_container">
        <h1 className="error_404_head1">404 Error</h1>
        <h2 className="error_404_head2">Page Not Found</h2>
        <button className="error_btn" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </>
  );
};

export default Error404;

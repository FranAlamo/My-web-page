import React from "react";
import "../404/Error.css";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page not found</h2>
        <p className="error-description">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="error-link">
          Return to main page
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

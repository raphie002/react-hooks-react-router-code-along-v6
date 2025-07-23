// src/pages/ErrorPage.js
import React from "react"; // Import React
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom"; // Import useRouteError

function ErrorPage() {
  const error = useRouteError(); // Get error details
  console.error(error); // Log the error for debugging

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
        <p>
          <i>{error.statusText || error.message}</i> {/* Display error message */}
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
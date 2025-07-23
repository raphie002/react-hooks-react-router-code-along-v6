// src/pages/UserProfile.js
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { useParams } from "react-router-dom"; // Import useParams
import NavBar from "../components/NavBar";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams(); // Get URL parameters
  const userId = params.id; // Access the 'id' parameter

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then(r => r.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [userId]); // Re-run effect if userId changes

  // Conditional rendering to show loading state
  if (!user.name) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1> {/* Display user's name */}
      </main>
    </>
  );
}

export default UserProfile;

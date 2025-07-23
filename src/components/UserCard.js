// src/components/UserCard.js
import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <p>
          {/* Link to the dynamic profile page */}
          <Link to={`/profile/${user.id}`}>View profile</Link>
        </p>
    </article>
  );
}

export default UserCard;
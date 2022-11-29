import APIManager from "../../services/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => { await APIManager.getUser().then(data => setUser(data)) };
    fetchProfile().catch(console.error);
  }, [])

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Last name: {user.first_name}</p>
      <p>First name: {user.last_name}</p>
      <Link className="link" to='/edituser' >Edit user</Link>
    </div>
  )
}

export default Profile;
import APIManager from "../../services/api";
import { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchProfile = async () => { await APIManager.getUser().then(data => setProfile(data)) };
    fetchProfile().catch(console.error);
  }, [])

  return (
    <div>Profile
      <p>Email: {profile.email}</p>
      <p>Todo: Change password</p>
      <button></button>
    </div>
  )
}

export default Profile;
import APIManager from "../../services/api";
import { useState, useEffect } from "react";

const EditProfile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => { await APIManager.getUser().then(data => setUser(data)) };
    fetchProfile().catch(console.error);
  }, [])

  return (
    <div>EditProfile</div>
  )
}

export default EditProfile
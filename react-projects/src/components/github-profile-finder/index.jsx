import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

const UserProfileFinder = () => {
  const [userName, setuserName] = useState("KevalD9");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData()
  }

  async function fetchGithubUserData(){
    setLoading(true);
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const userProfile = await data.json();

    if(userProfile){
        setUserData(userProfile);
        setLoading(false);
        setuserName("");
        console.log(userProfile);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading){
    return <h1>Loading Data... | Please Wait!!!</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="usename"
          type="text"
          placeholder="Search With Github Username..."
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData ? <User user={userData}/> : null
      }
    </div>
  );
};

export default UserProfileFinder;

import { useEffect, useState } from "react";
import Suggesstions from "./Suggesstions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleChange(event) {
    const searchQuery = event.target.value.toLowerCase();
    setSearchParam(searchQuery);

    if (searchQuery.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(searchQuery))
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(
          data.users.map((userItem) => {
            return userItem.firstName;
          })
        );

        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  if (loading) {
    return <div>Loading Data... Please Wait!!!</div>;
  }

  if (error) {
    return <div>Oops Some Error Occured...</div>;
  }

  console.log(users, filteredUsers);

  return (
    <div>
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          name="search-user"
          placeholder="Search User Name"
          value={searchParam}
          onChange={handleChange}
          autoComplete="off"
        />
      )}

      {showDropdown && (
        <Suggesstions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchAutoComplete;

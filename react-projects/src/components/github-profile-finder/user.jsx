/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  const date = createdDate.getDate();
  const month = createdDate.toLocaleString('default', { month: 'long' });
  const year = createdDate.getFullYear();
  //const fullDate = createdDate.toLocaleDateString('pt-PT'); 

  return <div className="user">
    <div className="name-container">
        <img src={avatar_url} alt="User" className="avatar"/>
        <a href={`htts://github.com/${login}`}>{name || login}</a>
    </div>
    <div className="profile-info">
        <div>
            <p>User Joined On - {`${date} ${month} ${year}`}</p>
        </div>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
  </div>;
};

export default User;

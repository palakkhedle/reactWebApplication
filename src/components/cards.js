import React from 'react';
import loadingGif from '../assets/loading.gif';




const Users = ({ loading, users }) => {
  const mainstyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + 3 + ',' + 1 + 'fr)',
  };
  return loading ? (
    <div id="main" align="center">

      <img src={loadingGif} alt="Loading.." />
    </div>
  ) :
    (
      <div id="main" style={mainstyle}>

        {users.map(user =>
          <div className="profile_cont" key={user.id}>
            {
              console.log(user,'isee')
            }

            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">{user.first_name} {user.last_name}</h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        )
        }
      </div>
    )
}

export default Users;
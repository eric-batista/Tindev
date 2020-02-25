import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function Main({ match }) {

  const [ users, setUsers ] = useState([]); 

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/Tindev/devs', {
        headers: {
          users: match.params.id,
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    
  }

  async function handleDisLike(id) {
    
  }

  return(
    <div className="main-container">
      <img src={logo} alt="logo"/>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt={user.name}/>
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>

            <div className="buttons">
              <button className="like-button" onClick={() => handleLike(user._id)} type="button">
                <img src={like} alt="like"/>
              </button>
              <button className="dislike-button" onClick={() => handleDisLike(user._id)} type="button">
                <img src={dislike} alt="dislike"/>
              </button>
            </div>
          </li>
        ))}  
      </ul>
    </div>
  );
}
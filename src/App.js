import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Login';
import Protected from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <nav>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/friends">Friends List</Link>
          <Link className="link" to="/friends/add">Add Friends</Link>
          <Link className="link" to="/logout">Logout</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/friends" element={
          <Protected>
            <FriendsList />
          </Protected>
        }
        />
        <Route path="/friends/add" element={
          <Protected>
            <AddFriend />
          </Protected>
        }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;

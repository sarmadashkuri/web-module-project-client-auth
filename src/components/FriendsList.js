import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    {`${friend.name} - ${friend.age} - ${friend.email}`}
                </li>
            )
            )}
            </ul>
        </div>
    )
}

export default FriendsList;
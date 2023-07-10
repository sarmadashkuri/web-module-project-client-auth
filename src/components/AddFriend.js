import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('friends', form)
            .then(res => {
                navigate('/friends');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" >Name</label>
                </div>
                <div>
                    <input id="username" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age" >Age</label>
                </div>
                <div>
                    <input id="age" name="age" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                </div>
                <div>
                    <input id="email" name="email" onChange={handleChange} />
                </div>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;
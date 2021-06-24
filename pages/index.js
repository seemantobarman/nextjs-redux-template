import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsername, setUser, logoutUser } from "../redux/slices/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);

    const handelClick = () => {
        dispatch(
            setUser({
                username: "Seemanto",
            })
        );
    };

    const handelLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <h1>Hello {username}</h1>
            <button onClick={handelClick}>Login</button>
            <button onClick={handelLogout}>Logout</button>
        </div>
    );
};

export default Home;

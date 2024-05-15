import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./authContext";

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [auth] = useContext(AuthContext);
    const getPosts = async () => {
        try {
            const { data } = await axios.get('/post/get-post'); 
            if (data?.success) {
                setPosts(data?.posts);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {       
        
        if(auth?.token){
            getPosts(); 
        }
        
    }, [auth?.token]);
    

    return (
        <PostContext.Provider value={{posts, setPosts,getPosts}}>
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };

import React from 'react'
import { createContext, useState } from 'react';

export const BlogContext = createContext()

function BlogProvider({children}) {


    const [NewBlog,setNewBlog] = useState({title:"", image :"", content:""});
    const [dashboard,setDashboard] = useState([])
    const values = {NewBlog, setNewBlog, dashboard, setDashboard}
    console.log(NewBlog)

    return (
        <BlogContext.Provider value = {values}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;

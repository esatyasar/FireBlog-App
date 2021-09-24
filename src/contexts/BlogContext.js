import React from 'react'
import { createContext, useState } from 'react';

export const BlogContext = createContext()

function BlogProvider({children}) {

    const [counter,setCounter] = useState(1)
    const [NewBlog,setNewBlog] = useState({id:counter, title:"", image :"", content:""});
    const initialData = [{id : 1,
                          title:"React Context",
                          image: "https://picsum.photos/id/217/300/300",
                          content: "lorem ipsum guy hukil asdilom asdiom"},
                          { id: 2,
                            title:"React Redux",
                            image: "https://picsum.photos/id/89/300/300",
                            content: "lorem ipsum guy hukil asdilom asdiom asdasd oasodijuybads"}]

    const [data,setData] = useState(initialData)
    
    const values = {NewBlog, setNewBlog, data, setData,counter, setCounter}

    return (
        <BlogContext.Provider value = {values}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;

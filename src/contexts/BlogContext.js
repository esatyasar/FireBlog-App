import React from 'react'
import { createContext } from 'react';

const BlogContext = createContext()

function BlogProvider({children}) {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;

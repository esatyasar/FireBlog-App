import React from 'react'
import { createContext, useState } from 'react';
import { toastSuccessNotify } from "../helpers/toastNotify";
import ReactHtmlParser from 'react-html-parser';

export const BlogContext = createContext()

function BlogProvider({children}) {

    const [counter,setCounter] = useState(3)
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
    const [details,setDetails] = useState({})
    const [update, setUpdate] = useState({})
    const [valid, setValid] = useState(true);
    
    const getDetails = (id) =>{
        const filtered = data.filter((item) =>{
            if (item.id === id){
                return setDetails(item)
            };
        })
    }
    
    const handleOnChangeContent = (e,editor) => {
        setNewBlog({...NewBlog, content: editor.getData()})
      }
      
    const handleUpdateContent = (e,editor) => {
        setDetails({...details, content: editor.getData()})
      }
      
    const deleteCard = (id) => {
        const deleted = data.filter((item) =>{
            return item.id !== id
        })
        setData(deleted)
        toastSuccessNotify("Deleted successfully!");
    } 

    const updateBlog = (id => {
        const update = data.filter((item) => {
            if (item.id === id) {
                return setUpdate(item)
            }
        })
    })
    
    const handleChange = () => {
        setValid(!valid);
      };
    
    const values = {
        NewBlog, setNewBlog, 
        data, setData,
        counter, setCounter, 
        getDetails, details, 
        setDetails, deleteCard, 
        updateBlog, handleChange,
        valid, handleOnChangeContent,
        handleUpdateContent
    }

    console.log(data)
    return (
        <BlogContext.Provider value = {values}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogProvider;

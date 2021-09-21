import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import clrswy from "../assets/cw.jpeg"


const Navbar =()=> {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <Nav className="d-flex justify-content-between bg-info p-4 ">
            <Link to="/">
                <img src={clrswy} style={{width:"40px"}}></img>
            </Link>
            <Link to="/">
            ──── <i>{"<Rifat/>"}</i><span>Blog</span> ──── 
            </Link>
            {isOpen ? <Link onClick={()=>setIsOpen(!isOpen)} >
                <i className="fas fa-user-tie"></i>
            </Link> :
            <Link className=" " onClick={()=>setIsOpen(!isOpen)}> 
                <li to="/">Login</li>
                <li to="/">Register</li>
            </Link>
    }
</Nav>
    )
};
export default Navbar ;
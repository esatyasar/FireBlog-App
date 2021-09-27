import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {useContext} from "react"
import {BlogContext} from "../contexts/BlogContext";
import { NavLink } from "react-router-dom"

 
const useStyles = makeStyles((theme) => ({
    cardContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        marginTop: "2rem",
        textAlign : "center"
    },
    card: {
        width: "800px",
        height: "600px",
        marginRight : "25px",
        marginBottom : "25px",
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5)
      },
    image:{
        height: "300px",
    },
    content:{
        height: "250px"
    },
    actions:{
        display: "flex",
        justifyContent: "space-around"
    },
    btnDelete:{
        textDecoration:"none"
    },
    btnUpdate:{
        textDecoration:"none"

    }
    

}));

export default function Details() {

    const {details, deleteCard, updateBlog} = useContext(BlogContext)

    const classes = useStyles();

  return (
    <div className ={classes.cardContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
        <h1>──── DETAILS ──── </h1>
        </Typography>
        <Card className ={classes.card}>
        <CardMedia className = {classes.image}
            component="img"
            alt="green iguana"
            height="140"
            image= {`${details.image}`}
        />
        <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="div">
            {details.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {details.content}
            </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
            <NavLink to="/UpdateBlog" activeClassName="active" className={classes.btnUpdate}>
                <Button size="small" onClick ={() => updateBlog(details.id)}>Update</Button>
            </NavLink>
            <NavLink to="/Dashboard" activeClassName="active" className={classes.btnDelete}>
                <Button   size="small" onClick ={() => deleteCard(details.id)}>
                    Delete
                </Button>
            </NavLink>
        </CardActions>
        </Card>
    </div>
  );
}
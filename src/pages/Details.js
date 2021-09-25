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

 
const useStyles = makeStyles((theme) => ({
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    }
}));

export default function Details() {

    const {details} = useContext(BlogContext)

    const classes = useStyles();
  return (
    <>
        <Typography variant="h4" className={classes.blogTitle}>
        <h1>──── DETAILS ──── </h1>
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {details.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {details.content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    </>
  );
}
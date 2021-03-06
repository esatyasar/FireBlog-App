import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import blogJpg from "../assets/blog3.jpg";
import { BlogContext } from "../contexts/BlogContext"
import { useContext} from "react";
import { NavLink } from "react-router-dom"
import { toastSuccessNotify } from "../helpers/toastNotify"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(12),
    backgroundColor: "#04237F",
  },
  blogImg: {
    width: 300,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#04237F",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#fff",
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#04237F",
  },
}));

export default function BlogForm() {
  
  const classes = useStyles();
  const {details, setDetails, data, setData, handleUpdateContent} = useContext(BlogContext)
  const detailsHandler = (id) =>{
    setData(data.map((item ) => 
       item.id === id ? {
         ...item, 
         title: details.title, 
         image : details.image, 
         content : details.content  
        } : item 
    ))
    toastSuccessNotify("Updated successfully!");
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogJpg} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ?????? Update Blog ??????
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={details.title}
                autoFocus
                onChange={(e) =>
                    setDetails({ ...details, title: e.target.value })
                  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={details.image}
                onChange={(e) =>
                    setDetails({ ...details, image: e.target.value })
                  }
              />
            </Grid>
            <Grid item xs={12}>
            <CKEditor 
                value = {details.content}
                name = "content"
                editor = {ClassicEditor}
                onChange= {(e,editor) => {handleUpdateContent(e,editor)}}
                />
            </Grid>
          </Grid>
          <NavLink to="/Dashboard" activeClassName="active" style = {{textDecoration : "none"}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={() => detailsHandler(details.id)}
            >
              Update
            </Button>
          </NavLink>
        </form>
      </div>
    </Container>
  );
}

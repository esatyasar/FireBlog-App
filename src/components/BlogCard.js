import React, {useContext,useEffect,useState} from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {NavLink} from "react-router-dom";
import {BlogContext} from "../contexts/BlogContext";
 
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(6),
    display:"flex",
    justifyContent:"center",
    flexWrap: 'wrap'

    
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    width: "300px",
    height: "400px",
    marginRight : "25px",
    marginBottom : "25px",
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5)

    
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
}));
function BlogCard() {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    setCurrentDate(
      date + '/' + month + '/' + year 
    );
  }, []);


  const {data} = useContext(BlogContext)

  const classes = useStyles();

  console.log(data)
  return (
    <div className="App">
      <Typography variant="h4" className={classes.blogTitle}>
            <h1>──── DASHBOARD ──── </h1>
      </Typography>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        {data.map((blog) => {
          return (
            <NavLink to="/Details" activeClassName="active" >
              <Grid key={blog.id} container justify="center" spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={blog.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {blog.content.slice(0,30)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                      <Avatar src="#" />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            Esat Yasar
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            {currentDate}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <FavoriteBorderIcon />
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </NavLink>
          )})}
        
      </Container>
    </div>
  );
}
export default BlogCard;
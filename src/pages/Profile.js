import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
  const {currentUser} = useAuth()
  return (
    <Card  sx={{ maxWidth: 345, m:"auto", mt:10, width:340 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="250"
          src="https://picsum.photos/id/217/300/300"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Esat Yasar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Junior Front-end Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          mail to : {currentUser.email}
        </Button>
      </CardActions>
    </Card>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgb(66,66,66)",
    color: "white",
    borderRadius: "none",
    height: "20rem",
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
      marginBlockStart: "40px"
  }
});

export default function Header() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
          Sheela Meheandi Artist
        </Typography>
        <Typography variant="h5" component="h5">
            All orders for all Ocassion
        </Typography>
       
        <Typography className={classes.pos} >
          Belongs to Mumbai Maharashtra     
        </Typography>
        <Typography variant="body2" component="p">
          Email Id : sheelumali1999@gmail.com
         
        </Typography>
        <Typography variant="body3" component="p">
          contact : 7304358492
         
        </Typography>
      </CardContent>
      
    </Card>
  );
}

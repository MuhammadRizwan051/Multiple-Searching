import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";


export default function MediaCard(props) {
  //   const [id, src, category, title, model, desc, price] = props

  return (
    <div>
      <Card mt={5} sx={{ border: '1px solid lightGrey' }}>
        <CardMedia
          sx={{ height: 300 }}
          component="img"
          image={props.src}
          alt="iPhone"
        // width='100'
        />
        <CardContent>
          <Chip label={props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} />
          <Typography gutterBottom variant="h5" component="div" align='center' color='red' sx={{ fontWeight: 'bold' }}>
            {`${props.title}: ${props.model}`}
          </Typography>


          <Tooltip title={props.description}>
            <Typography variant="body3">
              {props.description.slice(0, 30) + (props.description.length > 30 ? "..." : "")}
            </Typography>
          </Tooltip>
          <Typography variant="body1" mt={2} sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
            {props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" color='error' sx={{ width: 1, fontWeight: 'bold', fontSize: '20px', }}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


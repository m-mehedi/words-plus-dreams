import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({title, img, desc, link1, link2, btn1, btn2}) {
  return (
    <Card className='mr-10 md:mr-3' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{ location.href = link1}} size="small">{btn1}</Button>
        <Button onClick={()=>{ location.href = link2}} size="small">{btn2}</Button>
      </CardActions>
    </Card>
  );
}
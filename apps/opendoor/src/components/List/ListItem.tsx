import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { PropertyDataType } from '../../models/PropertyDataType';
type ListItemProps = {
  listItem: PropertyDataType;
};

export const ListItem = ({ listItem }: ListItemProps) => {
  const imageUrl = '/public/No-Image-Placeholder.svg';
  const price =
    listItem.userData.askingPrice || listItem.userData.updatedAskingPrice;
  const line1 = `${listItem.zillowData?.bedrooms}bd ${listItem.zillowData?.bathrooms}
            ba ${listItem.zillowData?.livingAreaValue} ft²`;
  const line2 = listItem.address.formattedAddress;

  return (
    <Card sx={{ width: '100%', borderRadius: '16px' }}>
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'row', height: '200px' }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={imageUrl}
          alt="green iguana"
          sx={{ width: '50%' }}
        />
        <CardContent sx={{ width: '50%', textAlign: 'left' }}>
          {price && (
            <Typography gutterBottom variant="h5" component="div">
              $ {price}
            </Typography>
          )}
          {line1 && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {line1}
            </Typography>
          )}
          {line2 && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {line2}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};

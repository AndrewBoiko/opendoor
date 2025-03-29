import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { PropertyDataType } from '../../../models/PropertyDataType';
import { Box, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';

type ListItemProps = {
  listItem: PropertyDataType;
  onListItemClick: (coords: [number, number]) => void;
};

const getListItemImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * 5) + 1;
  return `/property-${randomIndex}.avif`;
};

export const ListItem = ({ listItem, onListItemClick }: ListItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    setImageUrl(getListItemImageUrl());
  }, []);

  const price =
    listItem.userData.askingPrice || listItem.userData.updatedAskingPrice;
  const line1 = `${listItem.zillowData?.bedrooms}bd ${listItem.zillowData?.bathrooms}
            ba ${listItem.zillowData?.livingAreaValue} ft²`;
  const line2 = listItem.address.formattedAddress;

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ width: '100%', borderRadius: '16px', position: 'relative' }}>
      <IconButton
        onClick={handleFavoriteClick}
        aria-label="add to favorites"
        sx={{
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-160%)',
          zIndex: 1000,
          backgroundColor: 'white',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'rgba(160, 160, 160, 0.9)',
          },
        }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '200px',
          position: 'relative',
        }}
        onClick={() => onListItemClick(listItem.address.location)}
      >
        <Box sx={{ width: '50%', height: '100%', position: 'relative' }}>
          <CardMedia
            component="img"
            height="100%"
            image={imageUrl}
            alt="Property Image"
            sx={{ width: '100%' }}
          />
        </Box>

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
    </Card>
  );
};

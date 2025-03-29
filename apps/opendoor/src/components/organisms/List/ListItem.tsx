import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { PropertyDataType } from '../../../models/PropertyDataType';
import { Grid, IconButton } from '@mui/material';
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

  const price = listItem.userData.askingPrice || 'N/A';
  const line1 = [
    listItem.zillowData?.bedrooms && `${listItem.zillowData.bedrooms}bd`,
    listItem.zillowData?.bathrooms && `${listItem.zillowData.bathrooms}ba`,
    listItem.zillowData?.livingAreaValue &&
      `${listItem.zillowData.livingAreaValue} ft²`,
  ]
    .filter(Boolean)
    .join(' ');

  const line2 = listItem.address.formattedAddress;

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: '16px',
        position: 'relative',
        height: { xs: '400px', md: '200px' },
      }}
    >
      <Grid container>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: { xs: '300px', md: '100%' },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: { xs: '400px', md: '200px' },
              position: 'relative',
            }}
            onClick={() => onListItemClick(listItem.address.location)}
          >
            <CardMedia
              component="img"
              height="100%"
              image={imageUrl}
              alt="Property Image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
            />
          </CardActionArea>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ height: '100%', position: 'relative' }}
        >
          <CardContent sx={{ textAlign: 'left', paddingLeft: 4 }}>
            {price && (
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                $ {price}
              </Typography>
            )}
            {line1 && (
              <Typography variant="body2" sx={{}}>
                {line1}
              </Typography>
            )}
            {line2 && (
              <Typography variant="body2" sx={{}}>
                {line2}
              </Typography>
            )}
          </CardContent>
          <IconButton
            onClick={handleFavoriteClick}
            aria-label="add to favorites"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
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
        </Grid>
      </Grid>
    </Card>
  );
};

import { Container, Grid, Typography, Box } from '@mui/material';
import { ListItem } from './ListItem';

// TODO: Add a type for listItem
type ListItemsProps = {
  list: any[];
  listBanner: React.ReactNode;
  onListItemClick: (coords: [number, number]) => void;
};

export const ListItems = ({
  list,
  listBanner,
  onListItemClick,
}: ListItemsProps) => {
  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <Grid container spacing={2} sx={{ margin: '0 auto', padding: '0' }}>
        {list.map((listItem, index) => (
          <>
            <Grid
              size={{ xs: 12, md: 12 }}
              key={listItem._id || listItem.address.formattedAddress}
            >
              <ListItem listItem={listItem} onListItemClick={onListItemClick} />
            </Grid>
            {index === 1 && (
              <Grid size={{ xs: 12, md: 12 }} key={`banner-${index}`}>
                <Box
                  sx={{
                    padding: '16px',
                    backgroundColor: '#f0f8ff',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                >
                  {listBanner}
                </Box>
              </Grid>
            )}
          </>
        ))}
        {list.length === 0 && (
          <Grid size={{ xs: 12, md: 12 }} key={'no-results'}>
            <Typography variant="body1">Nothing found.</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

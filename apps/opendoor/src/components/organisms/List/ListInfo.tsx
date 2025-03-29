import { Box, Typography } from '@mui/material';
type ListInfoProps = {
  searchElement?: string;
  foundElement?: number;
};

export const ListInfo = ({ searchElement, foundElement }: ListInfoProps) => {
  return (
    <Box sx={{ textAlign: 'left', padding: '16px 0' }}>
      {searchElement && (
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ fontWeight: 'bold' }}
        >
          Home for sales in {searchElement}
        </Typography>
      )}
      <Typography variant="body1" color="textSecondary">
        {foundElement} listings found - Listed on the MLS. Provided by Opendoor
        Brokerage.
      </Typography>
    </Box>
  );
};

import { useEffect, useState } from 'react';
import { ListContainer } from '../organisms/List/ListContainer';
import { MapWrapper } from '../organisms/Map/MapWrapper';
import { fetchPropertiesList } from '../../store/listingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Box, Fab, Grid, useMediaQuery, useTheme } from '@mui/material';
import { PropertyDataType } from '../../models/PropertyDataType';
import { Banner } from '../organisms/Banner/Banner';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'For Sale', value: 'FOR_SALE' },
  { label: 'Sold', value: 'SOLD' },
];
const sortingOptions = [
  { label: 'None', value: 'none' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
];

const filterFn = (list: PropertyDataType[], filter: string) => {
  console.log('filterFn called', filter);
  if (filter === 'all') {
    return list;
  }
  return list.filter((item) => item?.zillowData?.homeStatus === filter);
};

const sortingFn = (list: PropertyDataType[], sort: string) => {
  console.log('sortingFn called', sort);
  if (sort === 'newest') {
    return [...list].sort((a, b) => {
      return (
        new Date(b?.zillowData?.yearBuilt || 2025, 0, 1).getTime() -
        new Date(a?.zillowData?.yearBuilt || 2025, 0, 1).getTime()
      );
    });
  }
  if (sort === 'oldest') {
    return [...list].sort((a, b) => {
      return (
        new Date(a?.zillowData?.yearBuilt || 2025, 0, 1).getTime() -
        new Date(b?.zillowData?.yearBuilt || 2025, 0, 1).getTime()
      );
    });
  }
  return list;
};

const searchFn = (list: PropertyDataType[], search: string) => {
  console.log('searchFn called', search);
  return list.filter((item) =>
    item?.address?.formattedAddress
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );
};

export const BrowseHomesPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedPropertyCoords, setSelectedPropertyCoords] = useState<
    [number, number] | null
  >(null);
  const [isListVisible, setIsListVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { properties, loading, error } = useSelector(
    (state: RootState) => state.listings
  );

  const onListItemClick = (coords: [number, number]) => {
    console.log('onListItemClick', coords);
    setSelectedPropertyCoords(coords);
  };

  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchPropertiesList());
  }, [dispatch]);

  return (
    <Box
      style={{
        display: 'flex',
        height: 'calc(100vh - 72px)',
        margin: 0,
        padding: 0,
      }}
    >
      <Grid
        container
        sx={{ margin: '0 auto', padding: '0', flex: 1, overflowY: 'auto' }}
      >
        <Grid
          id="map"
          size={{ xs: 12, md: isListVisible || !isSmallScreen ? 6 : 12 }}
          sx={{ height: '100%', overflowY: 'auto' }}
        >
          <MapWrapper selecteCoords={selectedPropertyCoords} />
        </Grid>
        {(isListVisible || !isSmallScreen) && (
          <Grid
            id="list"
            size={{ xs: 12, md: 6 }}
            sx={{
              height: isSmallScreen ? 'calc(100vh-72px)' : '100%',
              overflowY: 'auto',
              position: isSmallScreen ? 'absolute' : 'static',
              top: 68,
              left: 0,
              width: '100%',
              zIndex: 1000,
              backgroundColor: 'white',
            }}
          >
            <ListContainer
              list={properties}
              loading={loading}
              error={error}
              filterOptions={filterOptions}
              sortingOptions={sortingOptions}
              filterFn={filterFn}
              sortingFn={sortingFn}
              searchFn={searchFn}
              listBanner={<Banner />}
              onListItemClick={onListItemClick}
            />
          </Grid>
        )}
      </Grid>
      {isSmallScreen && (
        <Fab
          color="primary"
          aria-label="toggle list"
          onClick={toggleListVisibility}
          sx={{
            position: 'fixed',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1001,
          }}
        >
          {isListVisible ? <CloseIcon /> : <ListIcon />}
        </Fab>
      )}
    </Box>
  );
};

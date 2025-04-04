import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export type SearchInputFieldProps = {
  setSearchValue: (value: string) => void;
};

export const SearchInputField = ({ setSearchValue }: SearchInputFieldProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get('search') as string;
    setSearchValue(searchValue);
  };

  const handleIconClick = () => {
    const form = document.querySelector('form');
    if (form) {
      const formData = new FormData(form);
      const searchValue = formData.get('search') as string;
      setSearchValue(searchValue);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: { xs: '100%', md: 300 },
        borderRadius: '16px',
        boxShadow: 'none',
        border: '1px solid #ccc',
      }}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="City, asset, zip"
        inputProps={{ 'aria-label': 'Search by City, asset, zip' }}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleIconClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

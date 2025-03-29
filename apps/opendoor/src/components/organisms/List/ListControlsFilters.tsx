import { Container, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SearchInputField } from '../../molecules/SearchInputField/SearchInputField';
import { SelectOptionType } from '../../../models/SelectOptionType';

type ListControlsFiltersProps = {
  sortingOptions: SelectOptionType[];
  setSorting: (value: string) => void;
  filterOptions: SelectOptionType[];
  setFiltering: (value: string) => void;
  setSearchValue: (value: string) => void;
};

export const ListControlsFilters = ({
  sortingOptions,
  setSorting,
  filterOptions,
  setFiltering,
  setSearchValue,
}: ListControlsFiltersProps) => {
  const handleSortingChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value);
  };

  const handleFilteringChange = (event: SelectChangeEvent) => {
    setFiltering(event.target.value);
  };

  return (
    <Container
      style={{
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0,
      }}
    >
      <SearchInputField setSearchValue={setSearchValue} />
      {sortingOptions?.length && (
        <Select
          sx={{ flexGrow: 1 }}
          labelId="sorting-select-label"
          id="sorting-select"
          label="Sorting"
          defaultValue={sortingOptions[0].value}
          onChange={handleSortingChange}
        >
          {sortingOptions.map((option) => (
            <MenuItem key={option.value} value={option.value || ''}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
      {filterOptions?.length && (
        <Select
          sx={{ flexGrow: 1 }}
          labelId="filtering-select-label"
          id="filtering-select"
          label="Filtering"
          defaultValue={filterOptions[0].value}
          onChange={handleFilteringChange}
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value || ''}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    </Container>
  );
};

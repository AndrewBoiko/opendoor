import { Container, css } from '@mui/material';
import { ListItems } from './ListItems';
import { ListControlsFilters } from './ListControlsFilters';
import { ListInfo } from './ListInfo';
import React, { useState } from 'react';

// TODO: add types

type ListContainerProps = {
  list: any[];
  loading?: boolean;
  error?: string | null;
  sortingOptions: any[];
  filterOptions: any[];
  onListItemClick: (coords: [number, number]) => void;
  sortingFn?: (list: any, sort: any) => any;
  filterFn?: (list: any, filter: any) => any;
  searchFn?: (list: any, search: any) => any;
  listBanner?: React.ReactNode;
};

const ListContainerStyles = css`
  padding: 12px 48px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-y: auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
`;

export const ListContainer = ({
  list,
  loading,
  error,
  onListItemClick,
  sortingOptions,
  filterOptions,
  sortingFn,
  filterFn,
  searchFn,
  listBanner,
}: ListContainerProps) => {
  const [sorting, setSorting] = useState('');
  const [filtering, setFiltering] = useState('');
  const [searchValue, setSearchValue] = useState('');
  console.log('ListContainer rendered');
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (list.length === 0) {
    return <p>Nothing found.</p>;
  }

  const filteredList = filtering && filterFn ? filterFn(list, filtering) : list;
  const sortedList =
    sorting && sortingFn ? sortingFn(filteredList, sorting) : filteredList;
  const calculatedList =
    searchValue && searchFn ? searchFn(sortedList, searchValue) : sortedList;

  return (
    <Container css={ListContainerStyles}>
      <ListInfo
        searchElement={searchValue || 'Tampa'}
        foundElement={calculatedList.length}
      />
      <ListControlsFilters
        sortingOptions={sortingOptions}
        filterOptions={filterOptions}
        setSorting={setSorting}
        setFiltering={setFiltering}
        setSearchValue={setSearchValue}
      />
      <ListItems
        list={calculatedList}
        listBanner={listBanner}
        onListItemClick={onListItemClick}
      />
    </Container>
  );
};

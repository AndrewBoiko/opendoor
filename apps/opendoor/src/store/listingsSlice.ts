import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PropertyDataType } from '../models/PropertyDataType';

type PropertiesState = {
  properties: PropertyDataType[];
  loading: boolean;
  error: string | null;
};

const initialState: PropertiesState = {
  properties: [],
  loading: false,
  error: null,
};

export const fetchPropertiesList = createAsyncThunk(
  'properties/fetchPropertiesList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/get-listings'
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (!data || !data.deals) {
        throw new Error('Invalid data format');
      }
      return data.deals;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertiesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertiesList.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchPropertiesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default propertiesSlice.reducer;

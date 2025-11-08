// src/store/slices/eventsSlice.ts
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Event } from '../../types';
import Api from '../../api';

interface EventsState {
  events: Event[];
  loading: boolean;
  error: string;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: '',
};

const api = new Api()

const getEvents = createAsyncThunk(
  '@events/getEvents',
  async (url: string, {rejectWithValue})=> {
    try {
        const data = await api.get<Event[]>(url);
        return data
      } catch (e) {
        return rejectWithValue('Что то пошло не так!')
      }
  }
)

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // setEvents: (state, action: PayloadAction<Event[]>) => {
    //   state.events = action.payload;
    // },
    // setLoading: (state, action: PayloadAction<boolean>) => {
    //   state.loading = action.payload;
    // },
    // setError: (state, action: PayloadAction<string | null>) => {
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getEvents.fulfilled, (state, action)=> {
          state.events = action.payload
          state.loading = false
    })
    .addCase(getEvents.rejected, (state, action: PayloadAction<any>)=> {
      state.error = action.payload
      state.loading = false
    })
    .addCase(getEvents.pending, (state)=>{
      state.loading = true
    })

  }
  
});

// export const { setEvents, setLoading, setError } = eventsSlice.actions;
export default eventsSlice.reducer;

export {getEvents}
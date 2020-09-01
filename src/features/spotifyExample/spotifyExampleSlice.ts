import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {
  setLoggedIn
} from '../../features/authorization/authorizationSlice';

interface SpotifyExampleState {
  displayName: string,
  product: string
}

const initialState: SpotifyExampleState = {
  displayName: '',
  product: '',
};

export const spotifyexampleSlice = createSlice({
  name: 'spotifyExample',
  initialState,
  reducers: {
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    setProduct: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
  },
});

export const { setDisplayName, setProduct } = spotifyexampleSlice.actions;

export const selectDisplayName = (state: RootState) => state.spotifyExample.displayName;
export const selectProduct = (state: RootState) => state.spotifyExample.product;

export const setUserProfileAsync = (accessToken: string): AppThunk => dispatch => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + accessToken);

  fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: myHeaders,
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setDisplayName(data.display_name ? data.display_name : data.id));
      dispatch(setProduct(data.product));
    }).catch((error) => {
      console.log(error);
      if (error instanceof XMLHttpRequest) {
        if (error.status === 401) {
          dispatch(setLoggedIn(false));
        }
      }
    });
};

export default spotifyexampleSlice.reducer;

const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
  'user-read-private',
];

export const getAuthorizeHref = (): string => {
  const clientId = process.env.REACT_APP_SPOTIFEST_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
}

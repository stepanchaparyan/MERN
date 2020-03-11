import { createContext } from 'react';

function NOOP() {};

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: NOOP,
  logout: NOOP,
  isAuthenticated: false
});

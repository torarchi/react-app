import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

export {};


import React from 'react';

export const isLoggedIn = React.createContext<boolean>(false);
export const userID = React.createContext<string | null>(null);
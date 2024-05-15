import React from 'react';

export interface loginContext {
    userID: string | null;
    setUserID: (id: string | null) => void;
}
export interface graphDataContext {
    data: string | null;
    setData: (data: string | null) => void;
}

export const LogInContext = React.createContext<loginContext>({ userID: null, setUserID: () => {} });
export const GraphDataContext = React.createContext<graphDataContext>({ data: null, setData: () => {} });
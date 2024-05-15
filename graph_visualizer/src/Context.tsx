import React from 'react';

export interface loginContext {
    userID: string | null;
    setUserID: (id: string | null) => void;
}

export const LogInContext = React.createContext<loginContext>({ userID: null, setUserID: () => {} });
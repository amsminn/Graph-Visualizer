import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Body from './Body';

const LoginInfoContext = React.createContext<((check : boolean, id : string | null) => void) | null>(null);

function App() : JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userID, setUserID] = useState<string | null>(null);
  const setLoginInfo = (check : boolean, id : string | null) => {
    if(check) {
      setIsLoggedIn(true);
      setUserID(id);
    } else {
      setIsLoggedIn(false);
      setUserID(null);
    }
  };
  return (
    <LoginInfoContext.Provider value={setLoginInfo}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} userID={userID} />
        <Body />
      </div>
    </LoginInfoContext.Provider>
  );
}

export default React.memo(App);
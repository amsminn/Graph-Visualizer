import React, { useContext } from 'react';
import Header from './Header';
import Body from './Body';

import { isLoggedIn, userID } from './Context';

function App(): JSX.Element {
  const flag = useContext(isLoggedIn);
  const id = useContext(userID);
  return (
    <isLoggedIn.Provider value={flag}>
      <userID.Provider value={id}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </userID.Provider>
    </isLoggedIn.Provider>
  );
}

export default React.memo(App);
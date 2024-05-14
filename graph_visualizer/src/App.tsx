import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Body from './Body';

import { isLoggedIn, userID } from './Context';

function App() : JSX.Element {
  return (
    <isLoggedIn.Provider value={false}>
      <userID.Provider value={null}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </userID.Provider>
    </isLoggedIn.Provider>
  );
}

export default React.memo(App);
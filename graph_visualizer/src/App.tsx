import React from 'react';
import Header from './Header';
import Body from './Body';

function App(): JSX.Element {
  return (
      <div className="App">
        <Header />
        <Body />
      </div>
  );
}

export default React.memo(App);
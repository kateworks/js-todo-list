import React from 'react';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Todos />
        <Footer />
      </div>
    </div>
  );
}

export default App;

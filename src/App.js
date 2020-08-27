import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Welcome from './containers/Welcome';
import Content from './containers/Content';
import SVG from './components/Icon/sprite.js';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <SVG />
      <Header />
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

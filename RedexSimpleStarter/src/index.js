import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCO5c0GuABiAA4rn5bhmuOQMTUjPe6IKGg';
// Creat a new component. this component should produce
// some HTML
const App = () => {
  return <div>Hi!</div>;
}
// Take this Component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

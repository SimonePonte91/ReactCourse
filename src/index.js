//Importo le librerie ed i components
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCVsdS3WdvVD7fk9X6al6z6Q1zFDxmSQi0';

// Creo un nuovo component, quest'ultimo produrrà html tramite jsx
const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Prendo il component che genera html e lo parsifico nella index
ReactDOM.render(<App />, document.querySelector('.container'));

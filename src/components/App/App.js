import React from 'react';

import Row from '../Row/';
import Banner from '../Banner/';
import Navbar from '../Navbar/';

import './App.css';

import requests from "../../services/requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={ requests.fetchNetflixOriginals }
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={ requests.fetchTrending } />
      <Row title="Top rated" fetchUrl={ requests.fetchTopRated } />
      <Row title="Action Movies" fetchUrl={ requests.fetchActionMovies } />
      <Row title="Comedy Movies" fetchUrl={ requests.fetchComedyMovies } />
      <Row title="Horror Movies" fetchUrl={ requests.fetchHorrorMovies } />
      <Row title="Romance Movies" fetchUrl={ requests.fetchRomanceMovies } />
      <Row title="Documentaries" fetchUrl={ requests.fetchDocumentaries } />
    </div>
  );
}

export default App;

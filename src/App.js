import React from 'react';
// import './App.css';
import { Container } from 'reactstrap';
import Counters from "./Counters";

function App() {
  return (
    <Container className="themed-container">
      <Counters/>
    </Container>
  );
}

export default App;

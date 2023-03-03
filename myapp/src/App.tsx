import React from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap
import { Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div>hello!!</div>
        <Card className="text-center">
          <Card.Header>Work Of Day</Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;

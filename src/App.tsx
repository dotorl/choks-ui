import React from 'react';
import { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>HI</h1>

      <Avatar
        size="4"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        fallback="J"
      />
    </div>
  );
}

export default App;

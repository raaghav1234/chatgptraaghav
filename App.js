import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(''); // Initialize response as empty string

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setResponse(data.message)) // Update response state
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>  {/* Use curly braces for event handlers */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default App
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

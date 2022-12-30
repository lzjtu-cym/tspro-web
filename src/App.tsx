import React from 'react';
import './App.less';
import Entry from './Entry';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Entry />
    </BrowserRouter>
  );
};

export default App;

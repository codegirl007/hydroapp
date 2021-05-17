import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useState } from 'react';

export const App = () => {
  const [toggleHeading, setToggleHeading] = useState('sensors');

  const sensorsActuatorsToggle = (heading) => {
    setToggleHeading(heading)
  }

  return (
    <div className="container">
      <div className="app">
        <Header toggleHeading={toggleHeading} />
        <Main sensorsActuatorsToggle={sensorsActuatorsToggle} />
      </div>
    </div>
  );
}



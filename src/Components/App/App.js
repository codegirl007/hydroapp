import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export const App = () => {


  return (
    <div className="container">
      <div className="app">
        <Header  />
        <Main  />
      </div>
    </div>
  );
}



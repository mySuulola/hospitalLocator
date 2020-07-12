import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardItem from './components/CardItem';



const App: React.FC = () => {
  return (

    <BrowserRouter>
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/movie/:id" component={CardItem} />
{/* <Route component={NotFound}/> */}

    </Switch>    
    </BrowserRouter>
  )
}



export default App;

import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './component/home/Footer';
import { Header } from './component/home/header/Header';
import { HomePages } from './component/pageContent/HomePages';
import { Pages } from './component/pages/Pages';

function App() {
  return (
    <>
      <Router>
        <Header></Header>   
        <Switch>
          <Route path='/' exact component={HomePages}></Route>
          <Route path='/pages' exact component={Pages}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

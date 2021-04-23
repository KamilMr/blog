import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticlesList from './Pages/ArticlesPage';
import HomePage from './Pages/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id='page-body'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/article' component={ArticlePage} />
          <Route exact path='/articles-list' component={ArticlesList} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

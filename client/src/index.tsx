import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {
  Home,
  Host,
  Listing,
  Listings,
  User,
  Login,
  NotFound,
} from './sections';
import './styles/index.css';
import Layout from 'antd/lib/layout/layout';
import { AppHeader } from './sections/AppHeader';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:9003/api',
  cache,
});

const App = () => {
  return (
    <Router>
      <Layout className="app layout">
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

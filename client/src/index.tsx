import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {
  Home,
  Host,
  Listing,
  Listings,
  User,
  Login,
  Register,
  NotFound,
} from './sections';
import './styles/index.css';
import Layout from 'antd/lib/layout/layout';
import { AppHeader } from './sections/AppHeader';
import {
  Login as LoginData,
  LoginVariables,
} from './lib/graphql/mutations/Login/__generated__/Login';
import { LOG_IN } from './lib/graphql';
import { User as UserType } from './lib/types';
import { AppHeaderSkeleton, ErrorBanner } from './lib/components';
import { Spin } from 'antd';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:9003/api',
  cache,
  credentials: 'include',
});

const initialUser: UserType = {
  id: null,
  name: null,
  avatar: null,
  hasWallet: false,
  madeRequest: false,
};

const App = () => {
  const [login, { error }] = useMutation<LoginData, LoginVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.login) {
        setUser(data.login);
      }
    },
  });
  const [user, setUser] = useState<UserType>(initialUser);

  const loginRef = useRef(login);

  useEffect(() => {
    loginRef.current({ variables: { input: { withCookie: true } } });
  }, []);

  const LoginErrorBanner = error ? (
    <ErrorBanner
      message="Uh oh! Something went wrong :("
      description={error?.message}
    />
  ) : null;

  if (!user.madeRequest && !error) {
    return (
      <Layout>
        <AppHeaderSkeleton />
        <div className="launch-spinner">
          <Spin tip="Launching Car Hire+" size="large"/>
        </div>
      </Layout>
    );
  }

  return (
    <Router>
      <Layout className="app layout">
        <AppHeader user={user} setUser={setUser} />
        {LoginErrorBanner}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login {...props} setUser={setUser} user={user} />
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register {...props} setUser={setUser} user={user} />
            )}
          />
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

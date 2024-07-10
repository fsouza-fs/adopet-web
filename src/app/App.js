import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/layout/Layout';
import Adopt from '../containers/adopt/Adopt';
import Signin from '../containers/auth/signin/Signin';
import Logout from '../containers/auth/Logout/Logout';
import Animals from '../containers/admin/animals/Animals';
import CreateUser from '../containers/admin/createUser/CreateUser';
import AddAnimal from '../containers/admin/addAnimal/AddAnimal';
import Details from '../containers/adopt/details/Details';
import About from '../containers/about/About';

function App(props) {
  // Default routes for all kinds of users.
  let routes = (
    <Switch>
      <Route path="/admin/login" component={Signin} />
      <Route path="/details/:id" component={Details} />
      <Route path="/about" component={About} />
      <Route path="/" component={Adopt} />
    </Switch>
  );

  // Routes for administrators.
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/admin/logout" component={Logout} />
        <Route path="/admin/create-user" component={CreateUser} />
        <Route
          exact
          path={['/admin/add-animal', '/admin/edit-animal/:id']}
          component={AddAnimal}
        />
        <Route path="/admin" component={Animals} />
        <Redirect to="/admin" />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Radium(App));

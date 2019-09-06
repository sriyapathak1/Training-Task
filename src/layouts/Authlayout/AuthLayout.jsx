import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
import Trainee from '../../pages/Trainee';
import { AppBar } from '@material-ui/core';

const AuthLayout = ({children, ...rest}) => {
    return (
      <div className="page page-dashboard">
        <NavBar />
        <div className="main">{children}</div>
      </div>
    )
  }
export default AuthLayout;



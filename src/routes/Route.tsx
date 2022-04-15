//@ts-nocheck

import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const token = Cookies.get('token');

  const token = true;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (!isPrivate || !!token) {
          return <Component />;
        }
        return <Redirect to="" />;
      }}
    />
  );
};

export default Route;
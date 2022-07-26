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
  const id = Cookies.get('id');

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (!isPrivate || (!!id)) {
          return <Component />;
        }
        return <Redirect to="" />;
      }}
    />
  );
};

export default Route;
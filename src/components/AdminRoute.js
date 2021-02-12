import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;
  return (
    <Route
      {...rest}
      render={(props) =>
        adminInfo && adminInfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/admin" />
        )
      }
    ></Route>
  );
}

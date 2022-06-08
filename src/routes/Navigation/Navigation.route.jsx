import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div>Navigation</div>
      <Outlet />
    </>
  );
}

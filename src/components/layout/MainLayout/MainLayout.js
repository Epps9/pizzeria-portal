import React from 'react';
import propTypes from 'prop-types';

const MainLayout = props => (
  <div>
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;
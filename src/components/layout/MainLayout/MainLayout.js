import React from 'react';
import propTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = props => (
  <div>
    {props.children}
    <PageNav/>
  </div>
);

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;
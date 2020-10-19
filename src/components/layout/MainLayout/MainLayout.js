import React from 'react';
import propTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = props => (
  <div>
    <AppBar>
      <Container maxWidth='lg'>
        <ToolBar disableGutters>
          <PageNav/>
        </ToolBar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <ToolBar/>
      {props.children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;
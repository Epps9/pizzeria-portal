import React from 'react';
//import propTypes from 'prop-types';
import styles from './Login.module.scss';
import { FormControl, Input, InputLabel, Paper } from '@material-ui/core';

const Login = () => (
  <div className={styles.component}>
    <Paper className={styles.paper}>
      <h2>Login</h2>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl> <br></br> 
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>  
    </Paper>
  </div>
);

export default Login;
import React from 'react';
import propTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = (id) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>ID</Link>
  </div>
);

Tables.propTypes = {
  id: propTypes.string,
};

export default Tables;


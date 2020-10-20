import React from 'react';
//import propTypes from 'prop-types';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const Dashboard = () => (
  <div className={styles.component}>
    <h2>Statistics</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number of orders</TableCell>
            <TableCell>Income</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>25</TableCell>
            <TableCell>1500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <h2>Reservation and Events list</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reservation/Event</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>reservation 1</TableCell>
            <TableCell>12:30</TableCell>
            <TableCell>table 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
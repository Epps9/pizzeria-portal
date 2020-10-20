import React from 'react';
//import propTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const demoContent = [
  {hour: '12:05', orderId: 25, products: ['Coke ', 'Pizza'] },
  {hour: '12:15', orderId: 70, products: ['Fanta ', 'Salad'] },
  {hour: '12:30', orderId: 1, products: ['water ', 'Pasta'] },
];

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order time</TableCell>
            <TableCell>Table no./Order no.</TableCell>
            <TableCell>Ordered dishes</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.orderId}
              </TableCell>
              <TableCell>
                {row.products}
              </TableCell>
              <TableCell>
                <Button component={Link}>
                      done
                </Button>
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;

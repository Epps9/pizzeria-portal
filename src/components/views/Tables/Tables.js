import React from 'react';
import propTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel} from '@material-ui/core';
import Flatpickr from 'react-flatpickr';


const demoContent = [
  {hour: '12:00', status: 'reservation', order: null, tableNumber: 'Table 1'},
  {hour: '12:30', status: 'event', order: null, tableNumber: 'Table 2'},
  {hour: '13:00', status: 'reservation', order: null, tableNumber: 'Table 3'},
  {hour: '13:30', status: 'event', order: null, tableNumber: 'Table 2'},

];

const findTable = (status) => {
  // eslint-disable-next-line default-case
  switch (status) {
    case 'reservation' :
      return (
        <Button component={Link}> reservation  </Button>
      );
    case 'event' : 
      return (
        <Button component={Link}> event </Button>
      );
  }
};



const Tables = (id) => (
  <div className={styles.component}>
    <h2>Orders</h2>
    <FormControl className={styles.form}>
      <InputLabel htmlFor="my-input">date </InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text">
        <Flatpickr/>
      </Input>
    </FormControl> 
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {findTable(row.status)}
              </TableCell>
              <TableCell>
                {findTable(row.status)}
              </TableCell>
              <TableCell>
                {findTable(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW </Button>
    <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>ID</Button>
  </div>
);

Tables.propTypes = {
  id: propTypes.string,
};

export default Tables;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.any,
    changedStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  statusChanger(tableId, status) {
    if (status === 'free') {
      return status = 'thinking';
    }
    else if (status === 'thinking') {
      return status = 'ordered';
    }
    else if (status === 'ordered') {
      return status = 'prepared';
    }
    else if (status === 'prepared') {
      return status = 'delivered';
    }
    else if (status === 'delivered') {
      return status = 'paid';
    }
    else if (status === 'paid') {
      return status = 'free';
    }
    const { changedStatus } = this.props; 
    changedStatus(tableId, status);
  }


  renderActions(tableId, status){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => {this.statusChanger(tableId, status); }}>thinking</Button>
            <Button onClick={() => {this.statusChanger(tableId, status); }}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => {this.statusChanger(tableId, status); }}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => {this.statusChanger(tableId, status); }}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => {this.statusChanger(tableId, status); }}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => {this.statusChanger(tableId, status); }}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => {this.statusChanger(tableId, status); }}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { loading: { active, error }, tables } = this.props;

    // eslint-disable-next-line react/prop-types
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Table number</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.orderId && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.orderId}`}>
                        {row.orderId}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.tableId}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.tableId, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../utils/api'; // Import the api.js file

class TransactionsOverview extends React.Component {
  // Define the state
  state = {
    transactions: [],
  };

  // Lifecycle method to fetch data when the component mounts
  componentDidMount() {
    this.fetchTransactions();
  }

  // Method to fetch transactions data from the backend
  fetchTransactions() {
    api
      .get('/transactions') // API call to fetch transactions
      .then((response) => {
        this.setState({ transactions: response.data }); // Update the state with fetched transactions
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error); // Handle any error
      });
  }

  render() {
    const { transactions } = this.state; // Get transactions from state

    return (
      <div className="container mt-4">
        <h2>Transactions Overview</h2>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Order ID"
            />
          </div>
          <div className="col">
            <select className="form-select">
              <option value="">Filter by Status</option>
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div className="col">
            <input type="date" className="form-control" />
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>collect_id</th>
              <th>school_id</th>
              <th>gateway</th>
              <th>order_amount</th>
              <th>transaction_amount</th>
              <th>status</th>
              <th>custom_order_id</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through transactions and render them */}
            {transactions.map((transaction, index) => (
              <tr key={transaction.collect_id}>
                <td>{index + 1}</td>
                <td>{transaction.collect_id}</td>
                <td>{transaction.school_id}</td>
                <td>{transaction.gateway}</td>
                <td>{transaction.order_amount}</td>
                <td>{transaction.transaction_amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.custom_order_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionsOverview;

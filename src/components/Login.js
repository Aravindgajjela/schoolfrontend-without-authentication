
import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import api from '../utils/api';  // Import your axios instance

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: '',
    loggedIn: false,
  };

  // Handle input change
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle login form submission
  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    // Send request to backend API to authenticate user
    api
      .post('/login', { username, password })
      .then((response) => {
        // Save token in localStorage
        localStorage.setItem('token', response.data.token);
        this.setState({ loggedIn: true });
      })
      .catch((error) => {
        this.setState({ error: 'Invalid credentials' });
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/dashboard" />; // Use Navigate for redirection
    }

    return (
      <div className="container mt-4">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

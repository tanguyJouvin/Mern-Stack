import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    }
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
      
    this.setState({
      username: ''
    });
  }

  render() {
    return(
      <div>
        <h3>Création d'un nouvel utilisateur</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Utilisateur: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Ajouter"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
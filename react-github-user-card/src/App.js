import React from "react";
import axios from "axios";
// import Followers from './Followers';
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/richknicks")
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("https://api.github.com/users/richknicks/followers")
      .then(response => {
        console.log(response);
        this.setState({
          followers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
        <img src={this.state.user.avatar_url} />
        <p>Name: {this.state.user.name}</p>
        <p>Location: {this.state.user.location}</p>
        <p>Number or followers: {this.state.user.followers}</p>
        <p>Number or following: {this.state.user.following}</p>
        {this.state.followers.map(person => {
          return (
            <>
            <h1>GitHub Follower</h1>
              <img src={person.avatar_url} />
              <p>Name: {person.login}</p>
            </>
          );
        })}
      </div>
    );
  }
}
export default App;

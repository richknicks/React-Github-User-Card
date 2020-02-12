import React from "react";
import axios from "axios";
import "./App.css";
import styled from 'styled-components';

const MyDiv = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 50%;
`;
const MyImg = styled.img`
border-radius: 12px;
width: 50%;
`;
const MyPtag = styled.p`
font-size: 1.2rem;

`;


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
      <MyDiv className="App">
        <div>
        <h1>GitHub User</h1>
        <MyImg src={this.state.user.avatar_url} />
        <h2>Name: {this.state.user.name}</h2>
        <MyPtag>Location: {this.state.user.location}</MyPtag>
        <MyPtag>Number or followers: {this.state.user.followers}</MyPtag>
        <MyPtag>Number or following: {this.state.user.following}</MyPtag>
        </div>
        {this.state.followers.map(person => {
          return (
            <div>
            <h1>GitHub Follower</h1>
              <MyImg src={person.avatar_url} />
              <h2>Name: {person.login}</h2>
              <a href={person.html_url}><img src={`/images/Github-resize.png`} alt="Github logo"/></a>
            </div>
          );
        })}
      </MyDiv>
    );
  }
}
export default App;

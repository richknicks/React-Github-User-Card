import React from "react";
import axios from "axios";
import "./App.css";
import styled from 'styled-components';

const BackgroundDiv = styled.div`
background-image: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)),url(/images/background-img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: auto;
`;
const MyDiv = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 30%;
`;
const MyImg = styled.img`
border-radius: 12px;
width: 50%;
`;
const MyPtag = styled.p`
font-size: 1.2rem;
color: white;
`;
const FollowImg = styled.img`
border-radius: 12px;
width: 50%;
`;
const H1Tag = styled.h1`
color: white;
`;
const H2Tag = styled.h1`
color: white;
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
      <BackgroundDiv>
      <MyDiv className="App">
        <div>
        <H1Tag>GitHub User</H1Tag>
        <MyImg src={this.state.user.avatar_url} />
        <H2Tag>Name: {this.state.user.name}</H2Tag>
        <MyPtag>Location: {this.state.user.location}</MyPtag>
        <MyPtag>Number or followers: {this.state.user.followers}</MyPtag>
        <MyPtag>Number or following: {this.state.user.following}</MyPtag>
        </div>
        {this.state.followers.map(person => {
          return (
            
              <div>
            <H1Tag>GitHub Follower</H1Tag>
              <FollowImg src={person.avatar_url} />
              <H2Tag>Name: {person.login}</H2Tag>
              <a href={person.html_url}><img src={`/images/Github-resize.png`} alt="Github logo"/></a>
              </div>
            
          );
        })}
      </MyDiv>
      </BackgroundDiv>
    );
  }
}
export default App;

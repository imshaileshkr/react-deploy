import React, { Component } from 'react';
import axios from 'axios';

//https://www.reddit.com/r/space.json
class Apicall extends Component{

  // Create component method
  // I want my credit to be displayed as soon as
  // this page is being loaded so i have to call the
  // component lifecycle method componentWillMount()
  componentWillMount(){
    this.getRaddit();
  }
  // Here we'll be using axios to make a request
  getRaddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
        // using for response
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
       });
  }
  // Creating a Constractor
  constructor(props){
    super(props);
    this.state = {
      // Add some default thing
      posts:[],
      subreddit: 'space'
    };
    this.getRaddit = this.getRaddit.bind(this);
  }
  render(){
    return (
      <div>
        {/* <h1>{`/r/${this.state.subreddit}`}</h1>  */}
        <h4>Fetching data (title) from //https://www.reddit.com/r/space.json</h4>
        <hr/>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default Apicall;

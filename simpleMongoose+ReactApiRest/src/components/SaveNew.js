import React from 'react';
import axios from 'axios';

export default class NewLocation extends React.Component {
  state = {
    url: '',
    name: '',
    summary: ''
}

updateListUrl = event => {
  this.setState({url: event.target.value});
}

updateName = event => {
  this.setState({name: event.target.value});	
}

updateSummary = event => {
  this.setState({summary: event.target.value});	
}

uploadNew = () => {
  axios({
    method: 'post',
    url: 'http://127.0.0.1:3001/upload',
    data: {
      listing_url: this.state.url,
      name: this.state.name,
      summary: this.state.summary
    }
  }).then(res => {
        console.log(res);
  }).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

  });
}

  render() {
    return (
      <div>
        <h2 className='list-head'>Create new location</h2>
        <label for="url">listing_url</label>
        <input id="url" type="text" onChange={this.updateListUrl}></input>
        <br></br>
        <label for="name">name</label>
        <input id="name" type="text" onChange={this.updateName}></input>
        <br></br>
        <label for="summary">summary</label>
        <input id="summary" type="text" onChange={this.updateSummary}></input>
        <br></br>
        <button onClick={this.uploadNew}>Add</button>
      </div>
    )
  }
}
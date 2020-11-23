import React from 'react';
import axios from 'axios';

export default class TopList extends React.Component {
  state = {
    top: []
}

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/top`)
      .then(res => {
        const top = res.data;
        this.setState({ top });
      })
  }

  render() {
    return (
      <div>
      <h2 className='list-head'>Top AirBnB locations</h2>
      <table>
        <thead>
          <th>listing_url</th>
          <th>name</th>
          <th>description</th>
        </thead>
        <tbody>
          {this.state.top.map((repo) => {
            return (
              <tr>
                <td key={repo.listing_url}>{repo.listing_url}</td>
                <td key={repo.name}>{repo.name}</td>
                <td key={repo.description}>{repo.summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    )
  }
}
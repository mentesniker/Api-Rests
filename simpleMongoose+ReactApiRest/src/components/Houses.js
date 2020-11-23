import React from 'react';
import axios from 'axios';


export default class HousesList extends React.Component {
  state = {
    houses: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/casas`)
      .then(res => {
        const houses = res.data;
        this.setState({ houses });
      })
  }

  render() {
    return (
      <div>
      <h2 className='list-head'>List of AirBnB houses</h2>
      <table>
        <thead>
          <th>listing_url</th>
          <th>name</th>
          <th>description</th>
        </thead>
        <tbody>
          {this.state.houses.map((repo) => {
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
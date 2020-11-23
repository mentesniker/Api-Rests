import React from 'react';
import axios from 'axios';


export default class ApartmentsList extends React.Component {
  state = {
    apartments: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/departamentos`)
      .then(res => {
        const apartments = res.data;
        this.setState({ apartments });
      })
  }

  render() {
    return (
      <div>
      <h2 className='list-head'>List of AirBnB apartments</h2>
      <table>
        <thead>
          <th>listing_url</th>
          <th>name</th>
          <th>description</th>
        </thead>
        <tbody>
          {this.state.apartments.map((repo) => {
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
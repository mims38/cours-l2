import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './user.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card texteCouleur ml-auto mr-auto">
          <div className="row">
            <img className="img-thumbnail col-3" src={`${data.results[0].picture.large}`} />
            <div className="card-body col-9">
              <h2 className="card-title text-center">Informations user</h2>
              <div className="row">
                <div className="col-6">
                  <p className="card-text text-left">Gender : {`${data.results[0].gender}`}</p>
                  <p className="card-text text-left">Name : {`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`}</p>
                  <p className="card-text text-left">Location : {`${data.results[0].location.street.number},${data.results[0].location.street.name}  
                                                  / ${data.results[0].location.city} (${data.results[0].location.state}, ${data.results[0].location.postcode}) in ${data.results[0].location.country}`}
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text text-left">Email : {`${data.results[0].email}`}</p>
                  <p className="card-text text-left">Phone : {`${data.results[0].phone}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default App;
